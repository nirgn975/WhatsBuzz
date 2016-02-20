# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-02-20 08:55
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whats_buzz', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image_banner',
            field=models.ImageField(blank=True, upload_to='uploads/%Y/%m/%d/'),
        ),
        migrations.AddField(
            model_name='post',
            name='post_type',
            field=models.CharField(choices=[('FG', 'משחקי פייסבוק'), ('TY', 'בחן את עצמך')], default='FG', max_length=2),
        ),
    ]
