import os
from django.core.management import BaseCommand
from django.utils import translation
from whatsbuzz.models import Post


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Activating Hebrew language.
        translation.activate('he')

        print("Started create dummy data in Hebrew.")
        managing_body = Post.objects.get_or_create('')
        print("Finish create dummy data in Hebrew.")

        # Activating English language.
        translation.activate('en')
        print("Started create dummy data in English.")
        managing_body = Post.objects.get_or_create('')
        print("Finish create dummy data in English.")
