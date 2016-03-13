from django.contrib import admin

# Import my models.
from whats_buzz.models import Post
from whats_buzz.models import UserNameFB
from whats_buzz.models import UserProfileImageFB


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
                'profile_image_x',
                'profile_image_y',
            )
        })
    )


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


# Set up automated slug creation
class PostAdmin(admin.ModelAdmin):
    model = Post
    list_display = ('title', 'body', 'slug', 'post_type', 'image_banner', 'buzz')
    prepopulated_fields = {
        'slug': ('title',)
    }
    inlines = [UserNameAdmin, UserProfileImageAdmin]

    class Media:
        css = {
            "all": ("css/admin.css",)
        }


# And register them.as
admin.site.register(Post, PostAdmin)
