from django.utils import timezone
from rest_framework import viewsets
from rest_framework.response import Response
from itertools import chain
from operator import itemgetter

from api.serializers import TrendSerializer, TestYourselfSerializer, FacebookGameSerializer, BuzzSerializer
from whatsbuzz.models import Post, Trend, TestYourself, FacebookGame


class TrendViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Trends' posts.
    """
    queryset = Trend.objects.filter(publish__lte=timezone.now()).order_by('-created_at')
    serializer_class = TrendSerializer


class TestYourselfViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Test Yourself' posts.
    """
    queryset = TestYourself.objects.filter(publish__lte=timezone.now()).order_by('-created_at')
    serializer_class = TestYourselfSerializer


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
