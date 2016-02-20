from django.shortcuts import render
from whats_buzz.models import Post

# Create your views here.
def index(request):
    facebook_games_posts = Post.objects.filter(post_type='FG')
    test_yourself_posts = Post.objects.filter(post_type='TY')

    return render(request, 'index.html', {
        'facebook_games_posts': facebook_games_posts,
        'test_yourself_posts': test_yourself_posts,
                                          })
