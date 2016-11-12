from django.utils import timezone
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


class GetGame(APIView):
    """
    A custom endpoint for GET Facebook Game request.
    """

    def get(self, request, format=None):
        """
        Return a hardcoded response.
        """
        game_unique_id = self.request.query_params.get('id', None)
        print(game_unique_id)
        return Response({"success": True, "content": "Hello World!"})
