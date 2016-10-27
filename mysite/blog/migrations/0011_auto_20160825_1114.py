# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-25 04:14
from __future__ import unicode_literals

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_auto_20160823_1632'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='category',
            field=models.CharField(default='news', max_length=30),
        ),
        migrations.AlterField(
            model_name='comment',
            name='text',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, default='uploads/image_none.png', null=True, upload_to='uploads/%Y/%m/%d'),
        ),
    ]