from django.shortcuts import render
from django.http import JsonResponse
from whats_buzz.models import Post


def post_detail(request, slug):
    '''
    Get the post details by the slug.
    '''
    post = Post.objects.get(slug=slug)
    random_posts = Post.objects.all().order_by('?')[:5]
    return render(request, 'pages/post.html', {
        'post': post,
        'random_posts': random_posts
    })
