# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-02 14:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whatsbuzz', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='facebookgame',
            name='publish',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='testyourself',
            name='publish',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='trend',
            name='publish',
            field=models.BooleanField(default=False),
        ),
    ]