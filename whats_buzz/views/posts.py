from django.shortcuts import render
from whats_buzz.models import Post
from whats_buzz.models import UserNameFB
from whats_buzz.models import UserProfileImageFB


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

    # Get the user name from facebook API.
    try:
        facebook_user_name = UserNameFB.objects.get(post=post)
    except UserNameFB.DoesNotExist:
        facebook_user_name = None

    # Get the user profile image from facebook API.
    try:
        facebook_profile_image = UserProfileImageFB.objects.get(post=post)
    except UserProfileImageFB.DoesNotExist:
        facebook_profile_image = None

    return render(request, 'pages/post.html', {
        'post': post,
        'random_posts': random_posts,
        'facebook_user_name': facebook_user_name,
        'facebook_profile_image': facebook_profile_image,
    })
