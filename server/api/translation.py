from modeltranslation.translator import register, TranslationOptions
from .models import Post, Tags, Trend, FacebookGame


@register(Post)
class PostTranslation(TranslationOptions):
    fields = ('title', 'body',)
    required_languages = ('he',)


@register(Tags)
class TagsTranslation(TranslationOptions):
    fields = ('name',)
    required_languages = ('he',)


@register(Trend)
class PostTranslation(TranslationOptions):
    fields = ('code',)
    required_languages = ('he',)


@register(FacebookGame)
class PostTranslation(TranslationOptions):
    required_languages = ('he',)
