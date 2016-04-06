from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from django.core import serializers
from whats_buzz.models import Post


def index(request):
    """
    Get the 5 first posts from 'FG' and 'TY', sorted by date (last ones).
    Args:
        request:

    Returns:

    """
    facebook_games_posts = Post.objects.filter(post_type='FG')[:5]
    test_yourself_posts = Post.objects.filter(post_type='TY')[:5]
    buzz_posts = Post.objects.filter(buzz=True)

    return render(request, 'index.html', {
        'facebook_games_posts': facebook_games_posts,
        'test_yourself_posts': test_yourself_posts,
        'buzz_posts': buzz_posts,
                                          })


def get_all_posts_by_type(request):
    """
    Return all the posts by it's type (get it from the URL).
    Args:
        request:

    Returns:

    """
    url_path = request.path.replace('/', '')
    buzz_posts = Post.objects.filter(buzz=True)
    if url_path == "facebook-games":
        posts = Post.objects.filter(post_type='FG')[0:10]
        template_page = 'pages/facebook-games.html'
        return render(request, template_page, {
            'facebook_games_posts': posts,
            'buzz_posts': buzz_posts,
        })
    else:
        posts = Post.objects.filter(post_type='TY')[0:10]
        template_page = 'pages/test-yourself.html'
        return render(request, template_page, {
            'test_yourself_posts': posts,
            'buzz_posts': buzz_posts,
        })


def get_more_posts(request, page_type, start):
    if page_type == "facebook-games":
        request_post_type = 'FG'
    else:
        request_post_type = 'TY'

    new_start = int(start)
    posts = Post.objects.filter(post_type=request_post_type)[new_start:new_start + 6]
    serialized_obj = serializers.serialize('json', [post for post in posts])

    return JsonResponse([{
        'posts': serialized_obj,
    }], safe=False)
