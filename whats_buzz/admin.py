from django.contrib import admin

# Import my models.
from whats_buzz.models import Post
from whats_buzz.models import Games


class GamesAdmin(admin.StackedInline):
    model = Games
    extra = 1
    max_num = 1
    fieldsets = (
            (None, {
                    'fields': ()
            }),
            ('Facebook - Name', {
                    'classes': ('collapse',),
                    'fields': ('facebook_user_name',)
            })
    )


# Set up automated slug creation
class PostAdmin(admin.ModelAdmin):
    model = Post
    list_display = ('title', 'body', 'slug', 'post_type', 'image_banner', 'buzz')
    prepopulated_fields = {
        'slug': ('title',)
    }
    inlines = [GamesAdmin]

    class Media:
        css = {
            "all": ("css/admin.css",)
        }



# And register them.as
admin.site.register(Post, PostAdmin)
