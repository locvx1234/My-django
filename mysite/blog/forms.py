from django import forms
from .models import Post, Comment
from django.core.files.images import get_image_dimensions
class PostForm(forms.ModelForm):
	image = forms.ImageField(label='Select a entry Image')
	# category = forms.CharField(max_length=30)
	class Meta:
		model = Post
		fields = ('category','title', 'text', 'image')
		list_display=('title', 'author')

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('author','text',)
