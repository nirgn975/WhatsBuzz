from modeltranslation.translator import register, TranslationOptions
from .models import Post, FacebookUser


@register(Post)
class PostTranslation(TranslationOptions):
    fields = ('title', 'body',)
    required_languages = ('he',)


@register(FacebookUser)
class FacebookUserTranslation(TranslationOptions):
    fields = ('first_name', 'last_name',)
    required_languages = ('he',)
