from django.db import models
from django.utils.translation import ugettext_lazy as _


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
    """
    The basic fields for every post.
    """
    title = models.CharField(max_length=255, blank=True)
    body = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    banner_image = models.ImageField(upload_to='%Y/%m/%d/', blank=True)
    buzz = models.BooleanField(default=False)
    age_categories = models.CharField(max_length=25, choices=AgeCategories.choices, default='default')
    REQUIRED_FIELDS = ['title', 'body', 'banner_image', ]

    class Meta:
        abstract = True


class Trend(Post):
    """
    An article like post.
    """


class TestYourself(Post):
    """
    A quiz like post. The code should contain the quiz embedded code itself from playbuzz and alikes.
    """
    code = models.TextField()


class FacebookGame(Post):
    """
    Facebook Game contains all the facebook related entities.
    """


class FacebookGamesImage(models.Model):
    """
    All the background images for a Facebook Game.
    """
    post = models.ForeignKey(FacebookGame, related_name='background_image')
    background_image = models.ImageField(upload_to='%Y/%m/%d/', blank=True)


class FacebookUsername(models.Model):
    """
    The username options for a Facebook Game.
    """
    post = models.ForeignKey(FacebookGame, related_name='facebook_username')
    username = models.CharField(max_length=255, choices=FacebookUserName.choices, default='empty')
    x = models.PositiveIntegerField()
    y = models.PositiveIntegerField()
    color = models.CharField(max_length=255)
    font_size = models.PositiveIntegerField()


class FacebookProfileImage(models.Model):
    """
    The facebook profile image of the user, for a Facebook Game.
    """
    post = models.ForeignKey(FacebookGame, related_name='facebook_profile_image')
    width = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
    x = models.PositiveIntegerField()
    y = models.PositiveIntegerField()


class User(models.Model):
    """
    All the facebook users that ever logged in to the site.
    """
    token = models.TextField()
    email = models.CharField(max_length=225)
    name = models.CharField(max_length=225)
    created_at = models.DateTimeField(auto_now_add=True)
    last_time_visit = models.DateTimeField()
