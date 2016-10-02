from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from whatsbuzz.models import User, Trend, TestYourself, FacebookGame, FacebookGamesImage, FacebookUsername, \
    FacebookProfileImage


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


class TestYourselfAdmin(TranslationAdmin):
    model = TestYourself

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
admin.site.register(TestYourself, TestYourselfAdmin)
admin.site.register(FacebookGame, FacebookGameAdmin)
