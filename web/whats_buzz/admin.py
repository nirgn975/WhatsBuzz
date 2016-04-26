from django.contrib import admin

# Import my models.
from whats_buzz.models import Post
from whats_buzz.models import UserNameFB
from whats_buzz.models import UserProfileImageFB
from whats_buzz.models import GamesImagesFB
from whats_buzz.models import Quizzes


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


# Set up automated slug creation
class PostAdmin(admin.ModelAdmin):
    model = Post
    list_display = ('title', 'body', 'slug', 'post_type', 'image_banner', 'buzz')
    prepopulated_fields = {
        'slug': ('title',)
    }
    inlines = [GamesUploadImageAdmin, QuizzesAdmin, UserNameAdmin, UserProfileImageAdmin]

    class Media:
        css = {
            "all": ("css/admin.css",)
        }


# And register them.as
admin.site.register(Post, PostAdmin)
