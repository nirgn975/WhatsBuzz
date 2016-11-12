from api import views
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'trends', views.TrendViewSet, base_name='trends')
router.register(r'facebook-games', views.FacebookGameViewSet, base_name='facebook-games')
router.register(r'buzz', views.BuzzViewSet, base_name='buzz')
router.register(r'posts', views.DetailPostViewSet, base_name='posts')
router.register(r'age-categories', views.AgeCategoriesViewSet, base_name='age-categories')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^create-game/$', views.CreateGame.as_view()),
]
