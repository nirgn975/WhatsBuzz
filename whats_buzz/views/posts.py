from django.shortcuts import render
from whats_buzz.models import Post
from whats_buzz.models import User_Name_Game

def post_detail(request, slug):
    """
    Get the post detail by the slug.
    Args:
        request:
        slug:

    Returns:

    """
    post = Post.objects.get(slug=slug)
    random_posts = Post.objects.all().order_by('?')[:5]

    # Get the user name for facebook API.
    try:
        facebook_user_name = User_Name_Game.objects.get(post=post)
    except User_Name_Game.DoesNotExist:
        facebook_user_name = None

    return render(request, 'pages/post.html', {
        'post': post,
        'random_posts': random_posts,
        'facebook_user_name': facebook_user_name,
    })
