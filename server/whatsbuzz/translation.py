from modeltranslation.translator import register, TranslationOptions
from whatsbuzz.models import Post, Trend, TestYourself, FacebookGame


@register(Post)
class PostTranslation(TranslationOptions):
    fields = ('title', 'body', )
    required_languages = ('he',)


@register(Trend)
class PostTranslation(TranslationOptions):
    fields = ('code', )
    required_languages = ('he',)


@register(TestYourself)
class PostTranslation(TranslationOptions):
    fields = ('code', )
    required_languages = ('he',)


@register(FacebookGame)
class PostTranslation(TranslationOptions):
    # fields = ('title', 'body', )
    fields = ()
    required_languages = ('he',)
