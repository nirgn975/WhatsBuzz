from django.contrib import admin

# Import my models.
from whats_buzz.models import Post


# Set up automated slug creation
class PostAdmin(admin.ModelAdmin):
    model = Post
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'slug', 'post_type', 'image_banner', 'buzz')
        }),
        ('Facebook - Profile', {
            'classes': ('collapse',),
            'fields': (),
        }),
        ('Facebook - Friends', {
            'classes': ('collapse',),
            'fields': (),
        }),
        ('Facebook - Likes', {
            'classes': ('collapse',),
            'fields': (),
        }),
    )
    prepopulated_fields = {
        'slug': ('name',)
    }


# And register them.as
admin.site.register(Post, PostAdmin)