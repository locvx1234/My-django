# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-21 16:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20160818_1554'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.FileField(default='media/uploads/image_none.png', upload_to='media/uploads/'),
        ),
    ]
