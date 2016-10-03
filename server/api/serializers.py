from rest_framework import serializers
from django.contrib.auth.models import User
from whatsbuzz.models import Trend, TestYourself, FacebookGame


class TrendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trend
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories')


class TestYourselfSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestYourself
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories', 'code')


class FacebookGameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacebookGame
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories')
