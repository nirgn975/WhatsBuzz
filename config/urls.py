from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings

from django.contrib import admin
from whats_buzz import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^v1/api/', include('api.urls', namespace='v1')),

    url(r'^blah/', views.blah),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
