# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-19 18:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('whats_buzz', '0009_gamesimagesfb'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gamesimagesfb',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='whats_buzz.Post'),
        ),
    ]
