from rest_framework import serializers
from django.contrib.auth.models import User
from whatsbuzz.models import Trend, TestYourself, FacebookGame, FacebookGamesImage, FacebookUsername, FacebookProfileImage


class TrendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trend
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories')


class TestYourselfSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TestYourself
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories', 'code')


class FacebookGamesImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacebookGamesImage
        fields = ('background_image')


class FacebookUsernameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacebookUsername
        fields = ('username', 'x', 'y', 'color', 'font_size')


class FacebookProfileImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacebookProfileImage
        fields = ('width', 'height', 'x', 'y')


class FacebookGameSerializer(serializers.HyperlinkedModelSerializer):
    background_image = FacebookGamesImageSerializer(many=True, read_only=True)
    facebook_username = FacebookUsernameSerializer(many=True, read_only=True)
    facebook_profile_image = FacebookProfileImageSerializer(many=True, read_only=True)

    class Meta:
        model = FacebookGame
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories', 'background_image', 'facebook_username',
                  'facebook_profile_image')
