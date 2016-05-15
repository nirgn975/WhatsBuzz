from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from api.serializers import UserSerializer, PostSerializer, BuzzSerializer
from whats_buzz.models import Post


class IndexResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 5


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class TestYourselfPostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.filter(post_type='test_yourself')
    serializer_class = PostSerializer
    pagination_class = IndexResultsSetPagination


class FacebookGamesPostsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.filter(post_type='facebook_games')
    serializer_class = PostSerializer
    pagination_class = IndexResultsSetPagination


class BuzzViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.filter(buzz=True)
    serializer_class = BuzzSerializer
