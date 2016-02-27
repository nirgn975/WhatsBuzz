# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('whats_buzz', '0004_auto_20160221_2141'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='description',
            new_name='body',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='name',
            new_name='title',
        ),
        migrations.AddField(
            model_name='post',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 2, 27, 19, 19, 51, 510037)),
            preserve_default=False,
        ),
    ]
