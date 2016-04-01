"""WhatsBuzz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from whats_buzz import views
from django.contrib.sitemaps.views import sitemap
from whats_buzz.sitemap import (
    PostSitemap,
    StaticSitemap,
    HomepageSitemap,
)
sitemaps = {
    'posts': PostSitemap,
    'static': StaticSitemap,
    'homepage': HomepageSitemap
}


urlpatterns = [
    # The sitemap of the website.
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    # The main (home) page of the website.
    url(r'^$', views.index, name='home'),
    # Get the post detail.
    url(r'^posts/(?P<slug>[-\w]+)/$', views.post_detail, name='post_detail'),
    # Get post FB data.
    url(r'^posts/get_data/(?P<data_model>[-\w]+)/(?P<post_id>[-\w]+)/$', views.get_data, name='get_data'),
    # Get all posts type 'facebook-games'.
    url(r'^facebook-games/$', views.get_all_posts_by_type, name='facebook-games'),
    # Get all posts type 'test-yourself'.
    url(r'^test-yourself/$', views.get_all_posts_by_type, name='test-yourself'),
    # Get more posts to show in the facebook-games / test-yourself page.
    url(r'^get-more-posts/(?P<page_type>[-\w]+)/(?P<start>[-\w]+)/$', views.get_more_posts, name='get-more-posts'),
    # Send an EMAIL from the contact partial.
    url(r'^contact/$', views.contact, name='contact'),
    # Privacy policy page.
    url(r'^privacy-policy/$', views.privacy_policy, name='privacy-policy'),
    # Email Us.
    url(r'^email-us/$', views.email_us, name='email-us'),
    # The admin section.
    url(r'^admin/', admin.site.urls),
]
