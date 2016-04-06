# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GamesImagesFB',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('images', models.ImageField(blank=True, upload_to='%Y/%m/%d/')),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=255)),
                ('body', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('slug', models.SlugField(unique=True)),
                ('post_type', models.CharField(max_length=2, choices=[('FG', 'משחקי פייסבוק'), ('TY', 'בחן את עצמך')], default='FG')),
                ('image_banner', models.ImageField(blank=True, upload_to='%Y/%m/%d/')),
                ('buzz', models.BooleanField()),
                ('age_categories', models.CharField(max_length=3, choices=[('C', 'ילדים'), ('Y', 'נוער'), ('A', 'מבוגרים')])),
            ],
        ),
        migrations.CreateModel(
            name='Quizzes',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('code', models.TextField()),
                ('post', models.ForeignKey(to='whats_buzz.Post')),
            ],
        ),
        migrations.CreateModel(
            name='UserNameFB',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('facebook_user_name', models.CharField(max_length=255, choices=[('empty', ''), ('first_name', 'First name ONLY'), ('last_name', 'Last name ONLY'), ('full_name', 'The full user name')], default='empty')),
                ('name_x', models.PositiveIntegerField()),
                ('name_y', models.PositiveIntegerField()),
                ('post', models.ForeignKey(to='whats_buzz.Post')),
            ],
        ),
        migrations.CreateModel(
            name='UserProfileImageFB',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('profile_image_x', models.PositiveIntegerField()),
                ('profile_image_y', models.PositiveIntegerField()),
                ('profile_width', models.PositiveIntegerField()),
                ('profile_height', models.PositiveIntegerField()),
                ('post', models.ForeignKey(to='whats_buzz.Post')),
            ],
        ),
        migrations.AddField(
            model_name='gamesimagesfb',
            name='post',
            field=models.ForeignKey(to='whats_buzz.Post'),
        ),
    ]
