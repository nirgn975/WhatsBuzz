from rest_framework import serializers
from whatsbuzz.models import Post, Tags, Trend, FacebookGame


class TagsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tags
        fields = ('name', )


class TrendSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trend
        fields = ('unique_id', 'title', 'banner_image')


class FacebookGameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FacebookGame
        fields = ('unique_id', 'title', 'banner_image')


class BuzzSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('unique_id', 'title', 'banner_image')


class DetailPostSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('unique_id', 'title', 'body', 'banner_image', 'age_categories', 'tags')


class AgeCategoriesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('unique_id', 'title', 'banner_image')
