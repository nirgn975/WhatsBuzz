from django.contrib import admin

# Import my models.
from whats_buzz.models import Post
from whats_buzz.models import User_Name_Game


class UserNameAdmin(admin.StackedInline):
    model = User_Name_Game
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


# Set up automated slug creation
class PostAdmin(admin.ModelAdmin):
    model = Post
    list_display = ('title', 'body', 'slug', 'post_type', 'image_banner', 'buzz')
    prepopulated_fields = {
        'slug': ('title',)
    }
    inlines = [UserNameAdmin]

    class Media:
        css = {
            "all": ("css/admin.css",)
        }


# And register them.as
admin.site.register(Post, PostAdmin)
