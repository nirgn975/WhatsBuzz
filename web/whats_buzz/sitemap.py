import datetime

from django.contrib.sitemaps import Sitemap
from django.core.urlresolvers import reverse
from .models import Post


class PostSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.5

    def items(self):
        return Post.objects.all()

    def lastmod(self, obj):
        return obj.created_at


class StaticSitemap(Sitemap):
    priority = 1
    changefreq = "daily"

    def items(self):
        return ['facebook-games', 'test-yourself',]

    def location(self, item):
        return reverse(item)


class HomepageSitemap(Sitemap):
    priority = 1
    changefreq = "daily"

    def items(self):
        return ['home',]

    def lastmod(self, obj):
        return datetime.date.today()

    def location(self,item):
        return reverse(item)