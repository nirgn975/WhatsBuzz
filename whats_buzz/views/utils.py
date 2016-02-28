from django.core.mail import EmailMessage
from django.shortcuts import render, redirect
from django.template import Context
from django.template.loader import get_template
from whats_buzz.forms import ContactForm


def contact(request):
    form_class = ContactForm

    if request.method == 'POST':
        form = form_class(data=request.POST)

        print(form.cleaned_data['contact_name'])

        if form.is_vaild():
            contact_name = form.cleaned_data['contact_name']
            form_content = form.cleaned_data['content']

            # Email the message
            template = get_template('contact_template.txt')
            context = Context({
                'contact_name': contact_name,
                'form_content': form_content,
            })
            content = template.render(context)
            email = EmailMessage('New contact form submssion',
                                 content,
                                 'You website <something>',
                                 ['nirgn@gmail.com'],
                                 )
            email.send()
            return redirect('contact')

    return render(request, 'partials/contact.html', {'form': form_class,})