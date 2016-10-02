from modeltranslation.translator import register, TranslationOptions
from whatsbuzz.models import Trend, TestYourself, FacebookGame


@register(Trend)
class PostTranslation(TranslationOptions):
    fields = ('title', 'body',)
    required_languages = ('he',)


@register(TestYourself)
class PostTranslation(TranslationOptions):
    fields = ('title', 'body', 'code', )
    required_languages = ('he',)


@register(FacebookGame)
class PostTranslation(TranslationOptions):
    fields = ('title', 'body', )
    required_languages = ('he',)
