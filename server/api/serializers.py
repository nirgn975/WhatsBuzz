from django.contrib.auth.models import User
from rest_framework import serializers
from whats_buzz.models import Post, GamesImagesFB,  Quizzes, UserNameFB, UserProfileImageFB


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class FbGamesImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GamesImagesFB
        fields = ('images',)


class QuizzesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quizzes
        fields = ('code',)


class FbUsersNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNameFB
        fields = ('facebook_user_name', 'name_x', 'name_y', 'font_color', 'font_size')


class FbProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileImageFB
        fields = ('profile_image_x', 'profile_image_y', 'profile_width', 'profile_height')


class PostSerializer(serializers.HyperlinkedModelSerializer):
    games_images = FbGamesImagesSerializer(many=True, read_only=True)
    quizzes = QuizzesSerializer(many=True, read_only=True)
    fb_users = FbUsersNameSerializer(many=True, read_only=True)
    profile_image = FbProfileImageSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('pk', 'title', 'body', 'post_type', 'image_banner', 'games_images', 'quizzes', 'fb_users', 'profile_image')


class BuzzSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('pk', 'title', 'image_banner')
