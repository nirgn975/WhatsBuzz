from rest_framework import serializers
from whatsbuzz.models import Post, Tags, Trend, FacebookGame


class TagsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tags
        fields = ('name', )


class TrendSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)

    class Meta:
        model = Trend
        fields = ('unique_id', 'title', 'body', 'banner_image', 'buzz', 'age_categories', 'tags')


class FacebookGameSerializer(serializers.HyperlinkedModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)

    class Meta:
        model = FacebookGame
        fields = ('unique_id', 'title', 'body', 'banner_image', 'buzz', 'age_categories', 'tags')


class BuzzSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('unique_id', 'title', 'banner_image')
