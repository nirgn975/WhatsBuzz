from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns

from django.contrib import admin
from whats_buzz import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    #url(r'^(?P<filename>(robots.txt)|(humans.txt))$', home_files, name='home-files'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += i18n_patterns(
    url(r'^admin/', admin.site.urls),
    url(r'^v1/api/', include('api.urls', namespace='v1'), name='v1'),

    url(r'^blah/', views.blah),
)