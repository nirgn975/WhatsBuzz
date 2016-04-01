from django.core.mail import EmailMessage
from django.shortcuts import render, redirect
from django.template import Context
from django.template.loader import get_template
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
