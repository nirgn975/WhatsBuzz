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
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    url(r'^$', views.index, name='home'),
    url(r'^posts/(?P<slug>[-\w]+)/$', views.post_detail, name='post_detail'),
    url(r'^posts/get_data/(?P<data_model>[-\w]+)/(?P<post_id>[-\w]+)/$', views.get_data, name='get_data'),
    url(r'^facebook-games/$', views.get_all_posts_by_type, name='facebook-games'),
    url(r'^test-yourself/$', views.get_all_posts_by_type, name='test-yourself'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^admin/', admin.site.urls),
]
