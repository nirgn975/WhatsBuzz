from django.core.files import File
from django.utils import timezone
from django.core.management import BaseCommand
from whatsbuzz.models import Trend, FacebookGame, FacebookGamesImage, FacebookUsername,\
    FacebookProfileImage, User


class Command(BaseCommand):
    def handle(self, *args, **options):

        print("Started creating Trends dummy data.")
        create_trend_dummy_data()
        print("Finish creating Trends dummy data.")

        print("----------")

        print("Started creating Facebook Games dummy data.")
        create_facebook_games_dummy_data()
        print("Finish creating Facebook Games dummy data.")

        print("----------")

        print("Started creating Facebook Users dummy data.")
        create_facebook_users_dummy_data()
        print("Finish creating Facebook Users dummy data.")


def create_trend_dummy_data():
    # First Trend post.
    Trend.objects.get_or_create(
        title='מה קורה כשמנסים למחוץ רימון יד? דאורדורנט? כדור?',
        body='לחברה האלה יש מכונה עם כוח מטורף למחוץ כל מוצר שרק תרצו לא תאמינו איזה דברים הם הכניסו למכונה.',
        title_en='What happens when you try to press a hand grenade? deodorant? ball?',
        body_en='These friends have a machine with the power mad crush any product that only you will not believe '
                'the things they put in the machine.',
        buzz=True,
        age_categories='children',
        publish=timezone.now(),
        banner_image=File(open('whatsbuzz/management/dummy_images/1.jpg', 'rb')),
        code='foo-1',
        code_en='foo-1-english',
    )

    # Second Trend post.
    Trend.objects.get_or_create(
        title='20 שאלות שלא ניתן לענות עליהן, כמעט...',
        body='לפניכם 20 שאלות קצת מוזרות, על חלקן כמעט בלתי אפשרי לענות. השאלות מנוסחות בלשון '
             'זכר מטעמי נוחות בלבד, אחרי כל שאלה תוכלו לראות את התפלגות התשובות של כל מי שהיה לפניכם (אנונימי כמובן)',
        title_en='20 questions that could be answered, almost ...',
        body_en='Here are 20 questions a bit weird, some of them almost impossible to answer. The questions are '
                'phrased in the masculine for convenience only, after all this you will see the distribution of '
                'answers to anyone whos in front of you (anonymously, of course)',
        buzz=False,
        age_categories='young',
        publish=timezone.now(),
        banner_image=File(open('whatsbuzz/management/dummy_images/3.jpg', 'rb')),
        code='foo-2',
        code_en='foo-2-english',
    )

    # Third Trend post.
    Trend.objects.get_or_create(
        title='האם תצליחו לזהות איזה מהכדורים אמיתי',
        body='הוספנו לכל תמונה כמה כדורים, האם תצליחו להבדיל בין הכדור האמיתי למזוייף',
        title_en='Did you identify a real bullets',
        body_en='We added a few pills each picture, will you tell the difference between fake real ball.',
        buzz=True,
        age_categories='adults',
        publish=timezone.now(),
        banner_image=File(open('whatsbuzz/management/dummy_images/4.jpg', 'rb')),
        code='foo-3',
        code_en='foo-3-english',
    )


def create_facebook_games_dummy_data():
    # First Facebook Game post.
    post = FacebookGame.objects.get_or_create(
        title='אתם מבוקשים! על מה ולמה?',
        body='כנסו וגלו על מה ולמה אתם מבוקשים וכמה כסף היו מוכנים לשלם עליכם',
        title_en='You wanted! Whatever for?',
        body_en='Enter and find out what and why you wanted some money would pay you',
        buzz=False,
        age_categories='young',
        publish=timezone.now(),
        banner_image=File(open('whatsbuzz/management/dummy_images/2.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/drugs.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/pee.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/shimpanza.jpg', 'rb')),
    )
    FacebookUsername.objects.get_or_create(
        post=post[0],
        username='full_name',
        x=390,
        y=297,
        color='#5d4725',
        font_size=25,
        text_align='left',
    )
    FacebookProfileImage.objects.get_or_create(
        post=post[0],
        width=98,
        height=99,
        x=340,
        y=190,
    )

    # Second Facebook Game post.
    post = FacebookGame.objects.get_or_create(
        title='כמה כסף יהיה בחשבון הבנק שלכם בעוד 10 שנים?',
        body='גלו כמה כסף יהיה בחשבון הבנק שלכם בעתיד',
        title_en='How much money will be in your bank account in 10 years?',
        body_en='Find out how much money will be in your bank account in future',
        buzz=True,
        age_categories='adults',
        publish=timezone.now(),
        banner_image=File(open('whatsbuzz/management/dummy_images/5.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/apple.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/bar-refali.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/bzooka.jpg', 'rb')),
    )
    FacebookGamesImage.objects.get_or_create(
        post=post[0],
        background_image=File(open('whatsbuzz/management/dummy_images/dokim.jpg', 'rb')),
    )
    FacebookUsername.objects.get_or_create(
        post=post[0],
        username='full_name',
        x=390,
        y=297,
        color='#5d4725',
        font_size=25,
        text_align='left',
    )
    FacebookProfileImage.objects.get_or_create(
        post=post[0],
        width=98,
        height=99,
        x=340,
        y=190,
    )


def create_facebook_users_dummy_data():
    # First Facebook User.
    User.objects.get_or_create(
        token='fFAGRNJru1FTz70BzhT3Zg',
        email='nir@gmail.com',
        name='Nir Galon',
        created_at=timezone.now(),
        last_time_visit=timezone.now(),
    )

    # Second Facebook User.
    User.objects.get_or_create(
        token='oMsCeLvIaQm6bTrgtp7',
        email='yotam@gmail.com',
        name='Yotam Emergy',
        created_at=timezone.now(),
        last_time_visit=timezone.now(),
    )
