from random import choice
from string import ascii_uppercase

from django.core.mail import EmailMessage
from django.shortcuts import render, redirect
from django.template import Context
from django.template.loader import get_template
from PIL import Image, ImageDraw, ImageFont
import urllib
from django.http import JsonResponse
from whats_buzz.forms import ContactForm
from whats_buzz.models import Post


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


def create_fb_image(request):
    base_image = Image.open('/usr/src/app' + request.GET.get('base_image'))

    print(request.GET.get('base_image'))

    image = base_image.copy()
    set_text_on_image(image, request.GET.get('text'), request.GET.get('x'), request.GET.get('y'), request.GET.get('color'), request.GET.get('font_size'))
    chars = ''.join(choice(ascii_uppercase) for i in range(12))
    image.save('/usr/src/app/users_photos/' + chars + '.jpg')

    response = JsonResponse([{
        'image_name': chars
    }], safe=False)

    return response


    # urllib.urlretrieve(user_image_path, "../../static/" + user_name + '.jpg')
    # background_image = Image.open(base_path)
    # user_image = Image.open(user_image_path, "../../static/" + user_name + '.jpg')
    #
    # print(background_image.width)
    # background_image = background_image.resize((230,230), Image.ANTIALIAS)
    # background_image.save(path)
    #
    # # Write "hello" on the image, in x=10 and y=10
    # image = background_image.copy()
    # draw = ImageDraw.Draw(image)
    # draw.text((10, 10), "hello")

    # https://pillow.readthedocs.io/en/3.2.x/handbook/tutorial.html#cutting-pasting-and-merging-images


def set_text_on_image(image, text, x, y, color, size):
    font = ImageFont.truetype("/usr/src/app/static/fonts/Helvetica.ttf", int(size))
    draw = ImageDraw.Draw(image)
    draw.text((int(x), int(y)), text, fill=color, font=font)
    return draw
