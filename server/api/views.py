import requests
from random import choice
from string import ascii_uppercase
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from io import BytesIO
from PIL import Image, ImageFont, ImageDraw
from google.cloud import storage

from api.serializers import TrendSerializer, FacebookGameSerializer, BuzzSerializer, DetailPostSerializer, \
    AgeCategoriesSerializer
from whatsbuzz.models import Post, Trend, FacebookGame, User, FacebookGamesImage, FacebookUsername, \
    FacebookProfileImage


class TrendViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Trends' posts.
    """
    queryset = Trend.objects.filter(publish__lte=timezone.now()).order_by('-created_at')
    serializer_class = TrendSerializer


class FacebookGameViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Facebook Games' posts.
    """
    queryset = FacebookGame.objects.filter(publish__lte=timezone.now()).order_by('-created_at')
    serializer_class = FacebookGameSerializer


class BuzzViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all Buzz posts.
    """
    queryset = Post.objects.filter(publish__lte=timezone.now()).filter(buzz=True).order_by('-created_at')[:5]
    serializer_class = BuzzSerializer


class DetailPostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all detail posts.
    """
    queryset = Post.objects.all()
    serializer_class = DetailPostSerializer
    lookup_field = 'unique_id'


class AgeCategoriesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all posts by age categories.
    """
    serializer_class = AgeCategoriesSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        age_categories = self.request.query_params.get('age_categories')
        return Post.objects.filter(age_categories=age_categories).order_by('?')[:5]


class GetGame(APIView):
    """
    A custom endpoint for GET Trend Game request.
    """

    def get(self, request, format=None):
        """

        :param request:
        :param format:
        :return:
        """
        unique_id = self.request.query_params.get('uniqueId', None)
        token = self.request.query_params.get('accessToken', None)
        post_language = self.request.query_params.get('postLanguage', None)
        user_id = self.request.query_params.get('userID', None)

        # Return the trend code, if it's a trend.
        try:
            trend = Trend.objects.get(unique_id=unique_id)
            language_field = 'code_' + post_language
            return Response({
                'success': True,
                'content': trend.__dict__[language_field]
            })
        except Exception as e:
            print(e)

        # If it isn't a trend, it's a facebook game.
        link = create_facebook_game(unique_id, token, post_language, user_id)
        return Response({'success': True, 'content': link})


def create_facebook_game(unique_id, token, post_language, user_id):
    """

    :param unique_id:
    :param token:
    :param post_language:
    :param user_id:
    :return:
    """
    try:
        # Get data from Facebook API.
        facebook_data = get_facebook_data(token)

        # Save the user data.
        save_user(token, user_id, facebook_data['name'])

        # Create the post image.
        image = create_fb_image(unique_id, facebook_data)

        random_image_name = facebook_data['name'].strip() + ''.join(choice(ascii_uppercase) for i in range(12))

        # Save the post image in Google storage.
        return save_fb_image(image, random_image_name)
    except Exception as e:
        print(e)


def create_fb_image(unique_id, facebook_data):
    # https://github.com/nirgn975/WhatsBuzz/blob/8a9f05e514263d5d658fd092746c8a4a183f57f5/web/whats_buzz/views/utils.py
    facebook_post = FacebookGame.objects.get(unique_id=unique_id)

    try:
        # Get one random image from the Facebook game images.
        facebook_game_image = FacebookGamesImage.objects.filter(post=facebook_post).order_by('?').first()
    except FacebookGamesImage.DoesNotExist:
        facebook_game_image = None

    try:
        facebook_game_username = FacebookUsername.objects.get(post=facebook_post)
    except FacebookUsername.DoesNotExist:
        facebook_game_username = None

    try:
        facebook_game_profile_image = FacebookProfileImage.objects.get(post=facebook_post)
    except FacebookProfileImage.DoesNotExist:
        facebook_game_profile_image = None

    response = requests.get(
        'https://storage.googleapis.com/whatsbuzz-prod-150319/' + str(facebook_game_image.background_image))
    base_image = Image.open(BytesIO(response.content))
    image = base_image.copy()

    # Paste the username text.
    if facebook_game_username:
        # font = ImageFont.truetype("fonts/Helvetica.ttf", int(facebook_game_username['font_size']))
        draw = ImageDraw.Draw(image)
        draw.text(
            (int(facebook_game_username.x),
             int(facebook_game_username.y)),
            facebook_data['name'],
            fill=facebook_game_username.color,
            # font=font
        )

    # Paste the Facebook profile image.
    # if facebook_game_profile_image:
    #     # Create alpha background with the same width and height as the original background.
    #     background = Image.new('RGBA', (base_image.width, base_image.height), (255, 255, 255, 255))
    #     background.paste(base_image)
    #
    #     # Add the image to the background.
    #     profile_image = Image.open(facebook_data['picture']['data']['url'])
    #
    #     profile_image = profile_image.resize((
    #         int(facebook_game_profile_image.width),
    #         int(facebook_game_profile_image.height)
    #     ))
    #     print(profile_image)
    #
    #     background.paste(
    #         profile_image,
    #         (int(facebook_game_profile_image.x), int(facebook_game_profile_image.y))
    #     )

    return image


def save_fb_image(image, image_name):
    client = storage.Client()
    bucket = client.get_bucket('whatsbuzz-prod-150319')
    blob = bucket.blob(image_name)

    img_byte = BytesIO()
    image.save(img_byte, format='PNG')
    img_byte = img_byte.getvalue()

    blob.upload_from_string(img_byte, content_type='image/jpeg')

    url = blob.public_url

    return '<img src="' + url + '" />'


def get_facebook_data(token):
    """
    Get facebook username and image by the user token.

    :param (sting) token:
        Facebook user token.
    :param (sting) user_id:
        Facebook user ID.
    :return:
        None.
    """
    r = requests.get("https://graph.facebook.com/v2.8/me?fields=name",
                     params={'access_token': token},
                     headers={'Content-type': 'application/json'})

    if r.status_code != requests.codes.ok:
        # Error
        pass
    return r.json()


def save_user(token, user_id, user_name):
    """
    If the user exist, update his last time visit. Else create a new user.

    :param (sting) token:
        Facebook user token.
    :param (sting) user_id:
        Facebook user ID.
    :param (sting) user_name:
        Facebook user name
    :return:
        None.
    """
    try:
        # The user does exist, update info.
        user = User.objects.get(user_id=user_id)
        user.last_time_visit = timezone.now()
        user.save()
    except ObjectDoesNotExist:
        # The user doesn't exit, create it.
        User.objects.get_or_create(
            token=token,
            user_id=user_id,
            name=user_name,
            last_time_visit=timezone.now(),
        )
