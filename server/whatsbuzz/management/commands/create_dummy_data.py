from django.core.files import File
from django.utils import timezone
from django.core.management import BaseCommand
from whatsbuzz.models import Trend, TestYourself, FacebookGame, FacebookGamesImage, FacebookUsername,\
    FacebookProfileImage


class Command(BaseCommand):
    def handle(self, *args, **options):

        print("Started creating Trends dummy data.")
        Trend.objects.get_or_create(
            title='מה קורה כשמנסים למחוץ רימון יד? דאורדורנט? כדור?',
            body='לחברה האלה יש מכונה עם כוח מטורף למחוץ כל מוצר שרק תרצו לא תאמינו איזה דברים הם הכניסו למכונה.',
            title_en='What happens when you try to press a hand grenade? deodorant? ball?',
            body_en='These friends have a machine with the power mad crush any product that only you will not believe \
                    the things they put in the machine.',
            buzz=True,
            age_categories='children',
            publish=timezone.now(),
            banner_image=File(open('whatsbuzz/management/dummy_images/1.jpg', 'rb')),
            code='foo',
        )
        print("Finish creating Trends dummy data.")

        print("----------")

        print("Started creating Facebook Games dummy data.")
        FacebookGame.objects.get_or_create(
            title='אתם מבוקשים! על מה ולמה?',
            body='כנסו וגלו על מה ולמה אתם מבוקשים וכמה כסף היו מוכנים לשלם עליכם',
            title_en='You wanted! Whatever for?',
            body_en='Enter and find out what and why you wanted some money would pay you',
            buzz=False,
            age_categories='young',
            publish=timezone.now(),
            banner_image=File(open('whatsbuzz/management/dummy_images/2.jpg', 'rb')),
            background_image=FacebookGamesImage.object.get_or_create(
                background_image='',
            ),
            facebook_username=FacebookUsername.object.get_or_create(
                username='full_name',
                x='390',
                y='297',
                color='#5d4725',
                font_size='25',
                text_align='left',
            ),
            facebook_profile_image=FacebookProfileImage.object.get_or_create(
                width='98',
                height='99',
                x='340',
                y='190',
            )
        )
        print("Finish creating Facebook Games dummy data.")
