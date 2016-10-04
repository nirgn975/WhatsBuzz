from django.core.management import BaseCommand
from whatsbuzz.models import Trend, TestYourself, FacebookGame


class Command(BaseCommand):
    def handle(self, *args, **options):

        print("Started creating Trends dummy data.")

        Trend.objects.get_or_create(title='כותרת', body='תוכן', title_en='title2', body_en='body', buzz=True,
                                    age_categories='children', publish=True)

        print("Finish creating Trends dummy data.")
