from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from api.serializers import UserSerializer, PostSerializer, BuzzSerializer
from whats_buzz.models import Post


class IndexResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 5


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class PostsViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        post_type = self.request.query_params.get('post_type', None)
        print(post_type)
        if post_type is not None:
            queryset = Post.objects.filter(post_type=post_type)
        else:
            queryset = Post.objects.all()
        return queryset


class BuzzViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.filter(buzz=True)
    serializer_class = BuzzSerializer
