# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-25 07:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_auto_20160825_1436'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='id_category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.Category'),
        ),
    ]
