import uuid

from django.db import models
from ckeditor.fields import RichTextField
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


class UserNameAlign(object):
    choices = (
        ('left', _('Left')),
        ('center', _('Center')),
        ('right', _('Right')),
    )


class Tags(models.Model):
    name = models.CharField(_('tag'), max_length=255, unique=True)

    def __str__(self):
        return "{0}".format(self.name)

    class Meta:
        verbose_name = _('Tag')
        verbose_name_plural = _('Tags')


class Post(models.Model):
    """
    The basic fields for every post.
    """
    unique_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(_('title'), max_length=255, blank=True)
    body = RichTextField(_('body'), blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    banner_image = models.ImageField(_('banner image'), upload_to='%Y/%m/%d/', blank=True)
    buzz = models.BooleanField(_('buzz'), default=False)
    age_categories = models.CharField(_('age categories'), max_length=25, choices=AgeCategories.choices,
                                      default='default')
    publish = models.DateTimeField(_('publish'), null=True)
    tags = models.ManyToManyField(Tags, _('tags'), blank=True)
    REQUIRED_FIELDS = ['title', 'body', 'banner_image', 'publish']


class Trend(Post):
    """
    An article like post.
    """
    code = models.TextField(_('code'))
    type = models.TextField(_('type'), default='Trend', editable=False)

    class Meta:
        verbose_name = _('Trend')
        verbose_name_plural = _('Trends')


class FacebookGame(Post):
    """
    Facebook Game contains all the facebook related entities.
    """
    type = models.TextField(_('type'), default='Facebook', editable=False)

    class Meta:
        verbose_name = _('Facebook Game')
        verbose_name_plural = _('Facebook Games')


class FacebookGamesImage(models.Model):
    """
    All the background images for a Facebook Game.
    """
    post = models.ForeignKey(FacebookGame, related_name='background_image')
    background_image = models.ImageField(_('background image'), upload_to='%Y/%m/%d/', blank=True)

    class Meta:
        verbose_name = _('facebook background image')
        verbose_name_plural = _('facebook background images')


class FacebookUsername(models.Model):
    """
    The username options for a Facebook Game.
    """
    post = models.ForeignKey(FacebookGame, related_name='facebook_username')
    username = models.CharField(_('username'), max_length=255, choices=FacebookUserName.choices, default='empty')
    x = models.PositiveIntegerField(_('x'))
    y = models.PositiveIntegerField(_('y'))
    color = models.CharField(_('color'), max_length=255)
    font_size = models.PositiveIntegerField(_('font_size'))
    text_align = models.CharField(_('text align'), max_length=225, choices=UserNameAlign.choices, default='center')

    class Meta:
        verbose_name = _('facebook username')
        verbose_name_plural = _('facebook usernames')


class FacebookProfileImage(models.Model):
    """
    The facebook profile image of the user, for a Facebook Game.
    """
    post = models.ForeignKey(FacebookGame, related_name='facebook_profile_image')
    width = models.PositiveIntegerField(_('width'))
    height = models.PositiveIntegerField(_('height'))
    x = models.PositiveIntegerField(_('x'))
    y = models.PositiveIntegerField(_('y'))

    class Meta:
        verbose_name = _('facebook profile image')
        verbose_name_plural = _('facebook profile images')


class User(models.Model):
    """
    All the facebook users that ever logged in to the site.
    """
    token = models.TextField()
    user_id = models.TextField(_('user_id'), max_length=225)
    name = models.CharField(_('name'), max_length=225)
    created_at = models.DateTimeField(auto_now_add=True)
    last_time_visit = models.DateTimeField(_('last_time_visit'))

    class Meta:
        verbose_name = _('Facebook User')
        verbose_name_plural = _('Facebook Users')
