import requests
from django.utils import timezone
from django.views.i18n import set_language
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import TrendSerializer, FacebookGameSerializer, BuzzSerializer, DetailPostSerializer, \
    AgeCategoriesSerializer
from whatsbuzz.models import Post, Trend, FacebookGame


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


class CreateGame(APIView):
    """
    A custom endpoint for GET Facebook Game request.
    """

    def get(self, request, format=None):
        """
        Return a hardcoded response.
        """
        unique_id = self.request.query_params.get('uniqueId', None)
        token = self.request.query_params.get('accessToken', None)
        post_language = self.request.query_params.get('postLanguage', None)
        user_id = self.request.query_params.get('userID', None)

        try:
            self.get_trend_game(Trend.objects.get(unique_id=unique_id), post_language)
        except Exception as e:
            print(e)

        try:
            game = self.get_facebook_game(FacebookGame.objects.get(unique_id=unique_id), post_language)
        except Exception as e:
            print(e)

        # Get the user data.
        r = requests.get("https://graph.facebook.com/v2.8/me?fields=name",
                         params={"access_token": token},
                         headers={'Content-type': 'application/json'})

        if r.status_code != requests.codes.ok:
            # Error
            pass

        data = r.json()
        print(data['name'])

        return Response({"success": True, "content": "Hello World!"})

    def get_trend_game(self, post, post_language):
        language_field = 'code_' + post_language
        return Response({
            "success": True,
            "content": post.__dict__[language_field]
        })

    def get_facebook_game(self, post, post_language):
        return 'any'