from rest_framework import viewsets
from api.serializers import TrendSerializer, TestYourselfSerializer, FacebookGameSerializer

from whatsbuzz.models import Trend, TestYourself, FacebookGame


class TrendViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Trend.objects.all().order_by('-created_at')
    serializer_class = TrendSerializer


class TestYourselfViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows Facebook users to be viewed or edited.
    """
    queryset = TestYourself.objects.all()
    serializer_class = TestYourselfSerializer


class FacebookGameViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows Facebook users to be viewed or edited.
    """
    queryset = FacebookGame.objects.all()
    serializer_class = FacebookGameSerializer
