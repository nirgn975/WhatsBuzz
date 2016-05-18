from django.conf.urls import url, include
from rest_framework import routers

from api.views import UserViewSet, TestYourselfPostsViewSet, FacebookGamesPostsViewSet, BuzzViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet, base_name='user')
router.register(r'testYourself', TestYourselfPostsViewSet, base_name='testYourself')
router.register(r'facebookGames', FacebookGamesPostsViewSet, base_name='facebookGames')
router.register(r'buzz', BuzzViewSet, base_name='buzz')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
]