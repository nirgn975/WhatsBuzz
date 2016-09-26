from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import Post
from .models import FacebookUser
from .models import UserNameFB
from .models import UserProfileImageFB
from .models import GamesImagesFB
from .models import Quizzes


class UserNameAdmin(admin.StackedInline):
    model = UserNameFB
    extra = 1
    max_num = 1
    fieldsets = (
        (None, {
            'fields': ()
        }),
        ('Facebook - Name', {
            'classes': ('collapse',),
            'fields': (
                'facebook_user_name',
                'name_x',
                'name_y',
                'font_color',
                'font_size',
            )
        })
    )


class GamesUploadImageAdmin(admin.TabularInline):
    model = GamesImagesFB
    extra = 1
    list_display = ('images',)


class UserProfileImageAdmin(admin.StackedInline):
    model = UserProfileImageFB
    extra = 1
    max_num = 1
    fieldsets = (
        (None, {
            'fields': ()
        }),
        ('Facebook - Profile Image', {
            'classes': ('collapse',),
            'fields': (
                'profile_image_x',
                'profile_image_y',
                'profile_width',
                'profile_height',
            )
        })
    )


class QuizzesAdmin(admin.StackedInline):
    model = Quizzes
    extra = 1
    max_num = 1
    fieldsets = (
        (None, {
            'fields': ()
        }),
        ('Quizzes', {
            'classes': ('collapse',),
            'fields': (
                'code',
            )
        })
    )


class PostAdmin(TranslationAdmin):
    model = Post
    list_display = ('title', 'body', 'post_type', 'image_banner', 'buzz')
    inlines = [GamesUploadImageAdmin, QuizzesAdmin, UserNameAdmin, UserProfileImageAdmin]

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


class FacebookUserAdmin(TranslationAdmin):
    model = FacebookUser
    list_display = ('first_name', 'last_name')

    class Media:
        js = (
            'modeltranslation/js/force_jquery.js',
            'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.24/jquery-ui.min.js',
            'modeltranslation/js/tabbed_translation_fields.js',
        )
        css = {
            'screen': ('modeltranslation/css/tabbed_translation_fields.css',),
        }


admin.site.register(Post, PostAdmin)
admin.site.register(FacebookUser, FacebookUserAdmin)
