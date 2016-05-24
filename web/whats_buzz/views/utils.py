# -*- coding: utf-8 -*-
import ssl
import urllib.request

from random import choice
from string import ascii_uppercase
from PIL import Image, ImageDraw, ImageFont

from django.core.mail import EmailMessage
from django.shortcuts import render, redirect
from django.template import Context
from django.template.loader import get_template
from django.http import JsonResponse

from whats_buzz.forms import ContactForm
from whats_buzz.models import Post, UserNameFB, GamesImagesFB, UserProfileImageFB


def contact(request):
    form_class = ContactForm

    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = form.cleaned_data['contact_name']
            form_content = form.cleaned_data['content']
            content_checkbox = form.cleaned_data['content_checkbox']

            # Email the message
            template = get_template('contact_template.txt')
            context = Context({
                'contact_name': contact_name,
                'form_content': form_content,
                'content_checkbox': content_checkbox,
            })
            content = template.render(context)
            email = EmailMessage('New contact form submssion',
                                 content,
                                 'You website <something>',
                                 ['whatsbuz@gmail.com'],
                                 )
            email.send()
            return redirect('/')

    return render(request, 'partials/contact.html', {'form': form_class,})


def privacy_policy(request):
    buzz_posts = Post.objects.filter(buzz=True)
    return render(request, 'pages/privacy-policy.html', {'buzz_posts': buzz_posts,})


def email_us(request):
    buzz_posts = Post.objects.filter(buzz=True)
    return render(request, 'pages/email-us.html', {'buzz_posts': buzz_posts,})


def create_image(request):
    slug = request.GET.get('slug')
    name = request.GET.get('name')

    post = Post.objects.get(slug=slug)
    imagesPost = GamesImagesFB.objects.filter(post=post).order_by('?').first()
    base_image = '/usr/src/app/staticuploads/' + str(imagesPost.images)

    try:
        fbTextPost = UserNameFB.objects.get(post=post)
        x = fbTextPost.name_x
        y = fbTextPost.name_y
        color = fbTextPost.font_color
        size = fbTextPost.font_size
    except UserNameFB.DoesNotExist:
        fbTextPost = None

    if fbTextPost:
        base_image = Image.open(base_image)
        image = base_image.copy()
        font = ImageFont.truetype("/usr/src/app/static/fonts/Alef-Regular.ttf", int(size))

        draw = ImageDraw.Draw(image)

        # Reverse if the name is in hebrew
        if any("\u0590" <= c <= "\u05EA" for c in name):
            reversed_name = name[::-1]
            name = reversed_name

        draw.text((int(x), int(y)), name, fill=color, font=font)
        chars = ''.join(choice(ascii_uppercase) for i in range(12))
        image.save('/usr/src/app/users_photos/' + chars + '.jpg', quality=90)

        base_image = '/usr/src/app/users_photos/' + chars + '.jpg'
    else:
        chars = 'Error'

    try:
        fbImagePost = UserProfileImageFB.objects.get(post=post)
        profile_image_x = fbImagePost.profile_image_x
        profile_image_y = fbImagePost.profile_image_y
        profile_width = fbImagePost.profile_width
        profile_height = fbImagePost.profile_height
    except UserProfileImageFB.DoesNotExist:
        fbImagePost = None

    if fbImagePost:
        # Create alpha background with the same width and height as the original background.
        base_image = Image.open(base_image)
        background = Image.new('RGBA', (base_image.width, base_image.height), (255, 255, 255, 255))
        background.paste(base_image)

        # Add the image to the background.
        ssl._create_default_https_context = ssl._create_unverified_context
        (tmp_image_path, headers) = urllib.request.urlretrieve(request.GET.get('image'))
        print(tmp_image_path)
        image = Image.open(tmp_image_path)

        image = image.resize((int(profile_width), int(profile_height)), Image.ANTIALIAS)
        print(image)
        # background.paste(image, (int(profile_image_x), int(profile_image_y)), image)
        background.paste(image, (int(profile_image_x), int(profile_image_y)))

        # Save the background image.
        chars = ''.join(choice(ascii_uppercase) for i in range(12))
        background.save('/usr/src/app/users_photos/' + chars + '.jpg', quality=90)

    # Return json with path to image.
    return JsonResponse([{
        'image_name': chars
    }], safe=False)

