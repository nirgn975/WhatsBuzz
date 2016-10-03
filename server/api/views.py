from rest_framework import viewsets
from api.serializers import TrendSerializer, TestYourselfSerializer, FacebookGameSerializer

from whatsbuzz.models import Trend, TestYourself, FacebookGame


class TrendViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Trends' posts.
    """
    queryset = Trend.objects.all().order_by('-created_at')
    serializer_class = TrendSerializer


class TestYourselfViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Test Yourself' posts.
    """
    queryset = TestYourself.objects.all().order_by('-created_at')
    serializer_class = TestYourselfSerializer


class FacebookGameViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint to expose all 'Facebook Games' posts.
    """
    queryset = FacebookGame.objects.all().order_by('-created_at')
    serializer_class = FacebookGameSerializer
