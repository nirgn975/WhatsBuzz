from django.db import models
from django.utils.translation import ugettext_lazy as _


class PostType(object):
    choices = (
        ('facebook_games', _('Facebook Games')),
        ('test_yourself', _('Test Yourself')),
    )


class AgeCategories(object):
    choices = (
        ('default', _('Default')),
        ('children', _('Children')),
        ('young', _('Young')),
        ('adults', _('Adults')),
    )


class FacebookUserName(object):
    choices = (
        ('empty', ''),
        ('first_name', _('First Name')),
        ('last_name', _('Last Name')),
        ('full_name', _('First and Last Name')),
    )

class Post(models.Model):
    title = models.CharField(max_length=255, blank=True)
    body = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    post_type = models.CharField(max_length=25, choices=PostType.choices, default='facebook_games')
    image_banner = models.ImageField(upload_to='%Y/%m/%d/', blank=True)
    buzz = models.BooleanField(default=False)
    age_categories = models.CharField(max_length=25, choices=AgeCategories.choices, default='default')
    REQUIRED_FIELDS = ['title', 'body', 'image_banner', ]


class GamesImagesFB(models.Model):
    post = models.ForeignKey(Post, related_name='games_images')
    images = models.ImageField(upload_to='%Y/%m/%d/', blank=True)


class Quizzes(models.Model):
    post = models.ForeignKey(Post, related_name='quizzes')
    code = models.TextField()


class UserNameFB(models.Model):
    post = models.ForeignKey(Post, related_name='fb_users')
    facebook_user_name = models.CharField(max_length=255, choices=FacebookUserName.choices, default='empty')
    name_x = models.PositiveIntegerField()
    name_y = models.PositiveIntegerField()
    font_color = models.CharField(max_length=255)
    font_size = models.PositiveIntegerField()


class UserProfileImageFB(models.Model):
    post = models.ForeignKey(Post, related_name='profile_image')
    profile_image_x = models.PositiveIntegerField()
    profile_image_y = models.PositiveIntegerField()
    profile_width = models.PositiveIntegerField()
    profile_height = models.PositiveIntegerField()


class FacebookUser(models.Model):
    first_name = models.CharField(max_length=225)
    last_name = models.CharField(max_length=225)
