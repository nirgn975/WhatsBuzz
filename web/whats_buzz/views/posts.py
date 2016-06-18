from django.shortcuts import render
from django.http import JsonResponse
from django.db.models import Q
from whats_buzz.models import Post
from whats_buzz.models import UserNameFB
from whats_buzz.models import UserProfileImageFB
from whats_buzz.models import GamesImagesFB
from whats_buzz.models import Quizzes


def post_detail(request, slug):
    """
    Get the post detail by the slug.
    Args:
        request:
        slug:

    Returns:

    """
    post = Post.objects.get(slug=slug)
    image_fb_game = GamesImagesFB.objects.filter(post=post).order_by('?').first()
    random_posts = Post.objects.filter(Q(age_categories=post.age_categories) | Q(age_categories="D")).order_by('?')[:5]

    # Get the HTML quizzes if there is any.
    try:
        quizzes = Quizzes.objects.get(post=post)
    except Quizzes.DoesNotExist:
        quizzes = None

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
        'quizzes': quizzes,
        'image_fb_game': image_fb_game,
        'random_posts': random_posts,
        'facebook_user_name': facebook_user_name,
        'facebook_profile_image': facebook_profile_image,
    })


def get_data(request, data_model, post_id):
    if data_model == 'user_name':
        # Get the user name from facebook API.
        try:
            facebook_user_name = UserNameFB.objects.get(post__id=post_id)
            return JsonResponse([{
                'x': facebook_user_name.name_x,
                'y': facebook_user_name.name_y,
                'color': facebook_user_name.font_color,
                'size': facebook_user_name.font_size,
            }], safe=False)
        except UserNameFB.DoesNotExist:
            facebook_user_name = None
    elif data_model == 'profile_image':
        # Get the user profile image from facebook API.
        try:
            facebook_profile_image = UserProfileImageFB.objects.get(post__id=post_id)
            return JsonResponse([{
                'profile_image_x': facebook_profile_image.profile_image_x,
                'profile_image_y': facebook_profile_image.profile_image_y,
                'profile_width': facebook_profile_image.profile_width,
                'profile_height': facebook_profile_image.profile_height,
            }], safe=False)
        except UserProfileImageFB.DoesNotExist:
            facebook_profile_image = None
