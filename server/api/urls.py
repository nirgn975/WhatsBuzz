from api import views
from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'trends', views.TrendViewSet)
router.register(r'test-yourself', views.TestYourselfViewSet)
router.register(r'facebook-games', views.FacebookGameViewSet)
router.register(r'buzz', views.BuzzViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
