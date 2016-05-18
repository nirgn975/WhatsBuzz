from django.db import models
from django.utils.translation import ugettext_lazy as _


class PostType(object):
    choices = (
        ('facebook_games', _('משחקי פייסבוק')),
        ('test_yourself', _('בחן את עצמך')),
    )


class AgeCategories(object):
    choices = (
        ('default', _('ברירת מחדל')),
        ('childrens', _('ילדים')),
        ('youngs', _('נוער')),
        ('adults', _('מבוגרים')),
    )


class FacebookUserName(object):
    choices = (
        ('empty', ''),
        ('first_name', _('שם פרטי')),
        ('last_name', _('שם משפחה')),
        ('full_name', _('שם פרטי ומשפחה')),
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

    def get_absolute_url(self):
        return "/posts/%s/" % self.slug


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
