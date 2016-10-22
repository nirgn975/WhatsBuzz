from rest_framework import serializers
from whatsbuzz.models import Post, Tags, Trend, FacebookGame, FacebookGamesImage, FacebookUsername, \
    FacebookProfileImage


class TagsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tags
        fields = ('name', )


class TrendSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)

    class Meta:
        model = Trend
        fields = ('unique_id', 'title', 'body', 'banner_image', 'buzz', 'age_categories', 'tags')


class FacebookGamesImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacebookGamesImage
        fields = ('background_image', )


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
    tags = TagsSerializer(many=True, read_only=True)

    class Meta:
        model = FacebookGame
        fields = ('unique_id', 'title', 'body', 'banner_image', 'buzz', 'age_categories', 'background_image',
                  'facebook_username', 'facebook_profile_image', 'tags')


class BuzzSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('unique_id', 'title', 'banner_image')
