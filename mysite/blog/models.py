from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(User, null=True, blank=True)
    title = models.CharField(max_length=200)
    category = models.ForeignKey('blog.Category', null=True, blank=True)
    # category = models.CharField(max_length=200)
    text = RichTextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    # category = models.CharField(max_length=30, default="news")
    # image = models.ImageField(upload_to='uploads/%Y/%m/%d',blank=True, null=True)
    image = models.ImageField(upload_to='uploads/%Y/%m/%d', default='uploads/image_none.png',blank=True, null=True)
    def publish(self):
        self.published_date = timezone.now()
        self.save()
    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=50)
    created_date = models.DateTimeField(
            default=timezone.now)
    def __str__(self):
        return self.name

class Comment(models.Model):
    post = models.ForeignKey('blog.Post', related_name="comments")
    author = models.CharField(max_length=200)
    # author = models.ForeignKey(User, null=True, blank=True)
    text = RichTextField()
    created_date = models.DateTimeField(default=timezone.now)
    approved_comment = models.BooleanField(default=False)

    def approve(self):
        self.approved_comment = True
        self.save()

    def __str__(self):
        return self.text