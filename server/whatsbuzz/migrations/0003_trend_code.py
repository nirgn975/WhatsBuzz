# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-04 13:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whatsbuzz', '0002_auto_20161004_1307'),
    ]

    operations = [
        migrations.AddField(
            model_name='trend',
            name='code',
            field=models.TextField(default='d', verbose_name='code'),
            preserve_default=False,
        ),
    ]
