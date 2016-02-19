from django.contrib import admin

# Import my models.
from whats_buzz.models import Post

# Set up automated slug creation
class PostAdmin(admin.ModelAdmin):
    model = Post
    list_display = (
        'name',
        'description',
    )
    prepopulated_fields = {
        'slug': ('name',)
    }

# And register them.as
admin.site.register(Post, PostAdmin)