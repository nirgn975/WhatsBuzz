from django.shortcuts import render
from whatsbuzz.models import Post, Trend, FacebookGame, User, FacebookGamesImage, FacebookUsername, \
    FacebookProfileImage


class facebookCarwlerMiddleware(object):
    def process_request(self, request):
        facebook_crawler = [
            'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
            'facebookexternalhit/1.0 (+http://www.facebook.com/externalhit_uatext.php)',
            'facebookexternalhit/1.1 (+https://www.facebook.com/externalhit_uatext.php)'
            'facebookexternalhit/1.0 (+https://www.facebook.com/externalhit_uatext.php)'
        ]

        # Not Facebook crawler.
        print('1111111111')
        if request.META['HTTP_USER_AGENT'] not in facebook_crawler:
            return None

        # Get the post id.
        if request.method == 'GET' and request.path:
            karg = request.path.split('/')
            unique_id = karg[-1]
            data = self.get_data(unique_id)

        # Return the html page.
        print('22222222')
        return render(request, 'index_crawler.html', {
            'og:url': 'http://www.whatsbuzz.co.il',
            'og:type': 'website',
            'og:title': 'WhatsBuzz',
            'og:description': 'כל מה שויראלי, כל מה שבאזז אצלכם בניוז פיד. מתעדכן כל יום, כל היום',
            'og:image': 'http://www.whatsbuzz.co.il/assets/fb-share-banner.jpg',
        })

        return None

    def get_data(self, unique_id):
        facebook_post = FacebookGame.objects.get(unique_id=unique_id)

        try:
            # Get one random image from the Facebook game images.
            facebook_game_image = FacebookGamesImage.objects.filter(post=facebook_post).order_by('?').first()
        except FacebookGamesImage.DoesNotExist:
            facebook_game_image = None

        try:
            facebook_game_username = FacebookUsername.objects.get(post=facebook_post)
        except FacebookUsername.DoesNotExist:
            facebook_game_username = None

        try:
            facebook_game_profile_image = FacebookProfileImage.objects.get(post=facebook_post)
        except FacebookProfileImage.DoesNotExist:
            facebook_game_profile_image = None

        return [facebook_game_image, facebook_game_username, facebook_game_profile_image]
