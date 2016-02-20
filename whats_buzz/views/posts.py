from django.shortcuts import render
from whats_buzz.models import Post

# Create your views here.
def post_detail(request, slug):
    post = Post.objects.get(slug=slug)
    return render(request, 'pages/post.html', {'post': post})
