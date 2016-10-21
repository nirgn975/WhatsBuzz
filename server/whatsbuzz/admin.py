from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from whatsbuzz.models import User, Trend, FacebookGame, FacebookGamesImage, FacebookUsername, FacebookProfileImage


class FacebookGamesImageAdmin(admin.TabularInline):
    model = FacebookGamesImage
    extra = 1
    classes = ['collapse']


class FacebookUsernameAdmin(admin.TabularInline):
    model = FacebookUsername
    extra = 1
    max_num = 1
    classes = ['collapse']


class FacebookProfileImageAdmin(admin.TabularInline):
    model = FacebookProfileImage
    extra = 1
    max_num = 1
    classes = ['collapse']


class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ('token', 'email', 'name', 'last_time_visit')


class TrendAdmin(TranslationAdmin):
    model = Trend
    list_display = ['title', 'buzz', 'age_categories', 'publish']
    search_fields = ['title', 'buzz', 'age_categories', 'publish']

    class Media:
        js = (
            'modeltranslation/js/force_jquery.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            "all": ("css/admin.css",),
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


class FacebookGameAdmin(TranslationAdmin):
    model = FacebookGame
    inlines = [FacebookGamesImageAdmin, FacebookUsernameAdmin, FacebookProfileImageAdmin]
    list_display = ['title', 'buzz', 'age_categories', 'publish']
    search_fields = ['title', 'buzz', 'age_categories', 'publish']

    class Media:
        js = (
            'modeltranslation/js/force_jquery.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            "all": ("css/admin.css",),
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


admin.site.register(User, UserAdmin)
admin.site.register(Trend, TrendAdmin)
admin.site.register(FacebookGame, FacebookGameAdmin)
