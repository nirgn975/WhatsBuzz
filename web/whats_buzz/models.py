#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True)
    post_type = models.CharField(max_length=2,
                                      choices=(
                                          ('FG', 'משחקי פייסבוק'),
                                          ('TY', 'בחן את עצמך'),
                                      ),
                                      default='FG')
    image_banner = models.ImageField(upload_to='%Y/%m/%d/', blank=True)
    buzz = models.BooleanField()
    age_categories = models.CharField(max_length=3,
                                      choices=(
                                          ('D', 'ברירת מחדל'),
                                          ('C', 'ילדים'),
                                          ('Y', 'נוער'),
                                          ('A', 'מבוגרים'),
                                      ),
                                      default='D')

    REQUIRED_FIELDS = ['title', 'body', 'slug', 'image_banner',]

    def get_absolute_url(self):
        return "/posts/%s/" % self.slug


class GamesImagesFB(models.Model):
    post = models.ForeignKey(Post)
    images = models.ImageField(upload_to='%Y/%m/%d/', blank=True)


class Quizzes(models.Model):
    post = models.ForeignKey(Post)
    code = models.TextField()


class UserNameFB(models.Model):
    post = models.ForeignKey(Post)
    facebook_user_name = models.CharField(max_length=255,
                                          choices=(
                                              ('empty', ''),
                                              ('first_name', 'First name ONLY'),
                                              ('last_name', 'Last name ONLY'),
                                              ('full_name', 'The full user name'),
                                          ),
                                          default='empty')
    name_x = models.PositiveIntegerField()
    name_y = models.PositiveIntegerField()
    font_color = models.CharField(max_length=255)
    font_size = models.PositiveIntegerField()
    text_align = models.CharField(max_length=225,
                                    choices=(
                                        ('left', 'left'),
                                        ('center', 'center'),
                                    ),
                                    default='left')


class UserProfileImageFB(models.Model):
    post = models.ForeignKey(Post)
    profile_image_x = models.PositiveIntegerField()
    profile_image_y = models.PositiveIntegerField()
    profile_width = models.PositiveIntegerField()
    profile_height = models.PositiveIntegerField()
