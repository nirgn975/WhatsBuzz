import requests
from random import choice
from string import ascii_uppercase
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from io import BytesIO, StringIO
from PIL import Image, ImageFont, ImageDraw
from google.cloud import storage
from django.conf import settings

from api.serializers import TrendSerializer, FacebookGameSerializer, BuzzSerializer, DetailPostSerializer, \
    AgeCategoriesSerializer
from whatsbuzz.models import Post, Trend, FacebookGame, User, FacebookGamesImage, FacebookUsername, \
    FacebookProfileImage


class TrendViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Trends' posts.
    """
    serializer_class = TrendSerializer

    def get_queryset(self):
        return Trend.objects.filter(publish__lte=timezone.now()).order_by('-created_at')


class FacebookGameViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Facebook Games' posts.
    """
    serializer_class = FacebookGameSerializer

    def get_queryset(self):
        return FacebookGame.objects.filter(publish__lte=timezone.now()).order_by('-created_at')


class BuzzViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all Buzz posts.
    """
    serializer_class = BuzzSerializer

    def get_queryset(self):
        return Post.objects.filter(publish__lte=timezone.now()).filter(buzz=True).order_by('-created_at')[:5]


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
                'content': trend.__dict__[language_field],
                'type': 'trend'
            })
        except Exception as e:
            pass

        # If it isn't a trend, it's a facebook game.
        link = create_facebook_game(unique_id, token, user_id)
        return Response({'success': True, 'content': link, 'type': 'facebook-game'})


def create_facebook_game(unique_id, token, user_id):
    """

    :param unique_id:
    :param token:
    :param user_id:
    :return:
    """
    try:
        # Get post game data.
        data_list = get_post_game_data(unique_id)

        # Get data from Facebook API.
        facebook_data = get_facebook_data(token, data_list[1], data_list[2])

        # Save the user data.
        save_user(token, user_id, facebook_data['name'])

        # Create the post image.
        image = create_fb_image(facebook_data, data_list[0], data_list[1], data_list[2])

        # Create random name for the user image.
        random_image_name = facebook_data['name'].strip() + ''.join(choice(ascii_uppercase) for i in range(12))

        # Save the post image in Google storage.
        return save_fb_image(image, random_image_name)
    except Exception as e:
        print(e)


def create_fb_image(facebook_data, facebook_game_image, facebook_game_username, facebook_game_profile_image):
    """

    :param facebook_data:
    :param facebook_game_image:
    :param facebook_game_username:
    :param facebook_game_profile_image:
    :return:
    """
    response = requests.get(
        'https://storage.googleapis.com/' + settings.BUCKET_NAME + '/' + str(facebook_game_image.background_image))
    base_image = Image.open(BytesIO(response.content))
    image = base_image.copy()

    # Paste the username text.
    if facebook_game_username:
        font_response = requests.get('https://storage.googleapis.com/' + settings.BUCKET_NAME + '/Arimo-Regular.ttf')
        font = ImageFont.truetype(BytesIO(font_response.content), int(facebook_game_username.font_size))
        draw = ImageDraw.Draw(image)

        if facebook_game_username.text_align == 'left':
            # Get the text x and y.
            text_x, text_y = font.getsize(facebook_data['name'])
            facebook_game_username.x = facebook_game_username.x - (text_x / 2)

        # Reverse if the name is in Hebrew.
        if any("\u0590" <= c <= "\u05EA" for c in facebook_data['name']):
            reversed_name = facebook_data['name'][::-1]
            facebook_data['name'] = reversed_name

        draw.text(
            (int(facebook_game_username.x),
             int(facebook_game_username.y)),
            facebook_data['name'],
            fill=facebook_game_username.color,
            font=font
        )

    # Paste the Facebook profile image.
    if facebook_game_profile_image:
        # Create alpha background with the same width and height as the original background.
        background = Image.new('RGBA', (base_image.width, base_image.height), (255, 255, 255, 255))
        background.paste(image)

        # Add the image to the background.
        fb_user_image = requests.get(facebook_data['picture']['data']['url']).content
        profile_image = Image.open(BytesIO(fb_user_image))

        profile_image = profile_image.resize((
            int(facebook_game_profile_image.width),
            int(facebook_game_profile_image.height)
        ))

        background.paste(
            profile_image,
            (int(facebook_game_profile_image.x), int(facebook_game_profile_image.y))
        )

    return background


def save_fb_image(image, image_name):
    """
    Save the image on Google bucket and return it's HTML code.

    :param image:
        Image game object.
    :param image_name:
        Image name.
    :return:
        HTML public image url from bucket.
    """
    client = storage.Client()
    bucket = client.get_bucket(settings.BUCKET_NAME)
    blob = bucket.blob('users_pictures/' + image_name)

    img_byte = BytesIO()
    image.save(img_byte, format='PNG')
    img_byte = img_byte.getvalue()

    blob.upload_from_string(img_byte, content_type='image/jpeg')

    return blob.public_url


def get_facebook_data(token, facebook_game_username, facebook_game_profile_image):
    """
    Get facebook username and image by the user token.

    :param (sting) token:
        Facebook user token.
    :param (object) facebook_game_username:
        Facebook game username data.
    :param (object) facebook_game_profile_image:
        Facebook game user profile image data.
    :return:
        Facebook json data.
    """
    query = 'https://graph.facebook.com/v2.8/me?fields='
    if facebook_game_username:
        if facebook_game_username.username == 'full_name':
            query += 'name'
        elif facebook_game_username.username == 'first_name':
            query += 'first_name'
        elif facebook_game_username.username == 'last_name':
            query += 'last_name'

    if facebook_game_username and facebook_game_profile_image:
        query += ','

    if facebook_game_profile_image:
        query += 'picture'
        query += '.width(' + str(facebook_game_profile_image.width) + ')'
        query += '.height(' + str(facebook_game_profile_image.height) + ')'

    r = requests.get(query, params={'access_token': token}, headers={'Content-type': 'application/json'})

    if r.status_code != requests.codes.ok:
        # Error
        pass

    # Something
    request = r.json()
    if request['first_name']:
        request['name'] = request['first_name']
    elif request['last_name']:
        request['name'] = request['last_name']

    return request


def get_post_game_data(unique_id):
    """

    :param unique_id:
        Post unique id.
    :return:
        None.
    """
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

    return [facebook_game_image, facebook_game_username, facebook_game_profile_image]


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
