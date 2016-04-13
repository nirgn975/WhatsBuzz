from django.core.urlresolvers import reverse
from django.test import TestCase
from django.utils import timezone

from .models import Post


class PostModelTests(TestCase):
    """ something """

    def test_post_creation(self):
        post = Post.objects.create(
            title="See what you'r friends say about you",
            body="Find out what you three best fiends say about you on other people posts.",
            slug="friends-say",
            post_type="FG",
            image_banner="",
            buzz=True,
            age_categories="C",
        )

        now = timezone.now()
        self.assertLess(post.created_at, now)


class PostViewsTests(TestCase):
    """ something """

    def setUp(self):
        self.post = Post.objects.create(
            title="See what you'r friends say about you",
            body="Find out what you three best fiends say about you on other people posts.",
            slug="friends-say",
            post_type="FG",
            image_banner="",
            buzz=True,
            age_categories="C",
        )

        self.post2 = Post.objects.create(
            title="New post",
            body="This is a new post just for testing.",
            slug="new-post",
            post_type="TY",
            image_banner="",
            buzz=True,
            age_categories="C",
        )

    def test_post_view(self):
        resp = self.client.get(reverse('whats_buzz:facebook-games'))
        self.assertEqual(resp.status_code, 200)
        # Check if first post is in the page.
        self.assertIn(self.post, resp.context['facebook_games_posts'])
        # Check that the second post is not in the page.
        self.assertNotIn(self.post2, resp.context['facebook_games_posts'])
