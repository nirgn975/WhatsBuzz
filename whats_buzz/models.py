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
    image_banner = models.ImageField(upload_to='%Y/%m/%d/', blank = True)
    buzz = models.BooleanField()


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
    profile_image_x = models.PositiveIntegerField()
    profile_image_y = models.PositiveIntegerField()


class UserProfileImageFB(models.Model):
    post = models.ForeignKey(Post)
    profile_image_x = models.PositiveIntegerField()
    profile_image_y = models.PositiveIntegerField()
    profile_width = models.PositiveIntegerField()
    profile_height = models.PositiveIntegerField()