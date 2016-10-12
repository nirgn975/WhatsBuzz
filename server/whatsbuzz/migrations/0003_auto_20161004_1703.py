# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-10-04 14:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('whatsbuzz', '0002_auto_20161004_1307'),
    ]

    operations = [
        migrations.AddField(
            model_name='facebookusername',
            name='text_align',
            field=models.CharField(choices=[('left', 'Left'), ('center', 'Center'), ('right', 'Right')], default='center', max_length=225, verbose_name='text align'),
        ),
        migrations.AddField(
            model_name='trend',
            name='code',
            field=models.TextField(default='code', verbose_name='code'),
            preserve_default=False,
        ),
    ]