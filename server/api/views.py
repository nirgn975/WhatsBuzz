import requests
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import TrendSerializer, FacebookGameSerializer, BuzzSerializer, DetailPostSerializer, \
    AgeCategoriesSerializer
from whatsbuzz.models import Post, Trend, FacebookGame, User


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


class GetTrendGame(APIView):
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
        post_language = self.request.query_params.get('postLanguage', None)

        try:
            trend = Trend.objects.get(unique_id=unique_id)
            language_field = 'code_' + post_language
            return Response({
                'success': True,
                'content': trend.__dict__[language_field]
            })
        except Exception as e:
            print(e)


class GetFacebookGame(APIView):
    """
    A custom endpoint for GET Facebook Game request.
    """

    def get(self, request, format=None):

        unique_id = self.request.query_params.get('uniqueId', None)
        token = self.request.query_params.get('accessToken', None)
        post_language = self.request.query_params.get('postLanguage', None)
        user_id = self.request.query_params.get('userID', None)

        try:
            facebook_data = get_facebook_data(token)
            save_user(token, user_id, facebook_data['name'])
            game = create_facebook_game(FacebookGame.objects.get(unique_id=unique_id), post_language)
        except Exception as e:
            print(e)

        return Response({'success': True, 'content': 'Hello World!'})


def create_facebook_game(post, post_language):
    return 'any'


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
