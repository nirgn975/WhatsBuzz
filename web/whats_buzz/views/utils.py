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


def create_fb_image_with_text(request):
    base_image = Image.open('/usr/src/app' + request.GET.get('base_image'))
    image = base_image.copy()
    set_text_on_image(image, request.GET.get('text'), request.GET.get('x'), request.GET.get('y'), request.GET.get('color'), request.GET.get('font_size'))
    chars = ''.join(choice(ascii_uppercase) for i in range(12))
    image.save('/usr/src/app/users_photos/' + chars + '.jpg')

    response = JsonResponse([{
        'image_name': chars
    }], safe=False)

    return response


def set_text_on_image(image, text, x, y, color, size):
    font = ImageFont.truetype("/usr/src/app/static/fonts/Helvetica.ttf", int(size))
    draw = ImageDraw.Draw(image)
    draw.text((int(x), int(y)), text, fill=color, font=font)
    return draw


def create_fb_image_with_image(request):
    # Create alpha background with the same width and height as the original background.
    base_image = Image.open('/usr/src/app' + request.GET.get('base_image'))
    background = Image.new('RGBA', (base_image.width, base_image.height), (255, 255, 255, 255))
    background.paste(base_image)

    # Add the image to the background.
    image = Image.open('/usr/src/app' + request.GET.get('image'))
    image = image.resize((int(request.GET.get('width')), int(request.GET.get('hight'))))
    background.paste(image, (int(request.GET.get('x')), int(request.GET.get('y'))), image)

    # Save the background image.
    chars = ''.join(choice(ascii_uppercase) for i in range(12))
    background.save('/usr/src/app/users_photos/' + chars + '.jpg')

    response = JsonResponse([{
        'new_image_name': chars
    }], safe=False)

    return response
