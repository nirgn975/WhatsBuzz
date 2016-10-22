from dal import autocomplete

from django.utils.translation import ugettext_lazy as _
from django import forms

from .models import Trend, FacebookGame


class TrendForm(forms.ModelForm):
    class Meta:
        model = Trend
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories', 'publish', 'code', 'tags', )
        widgets = {
            'tags': autocomplete.ModelSelect2(url='tags-autocomplete', attrs={
                'data-placeholder': _('Select Tags'),
                'data-tags': 'true',
            })
        }


class FacebookGameForm(forms.ModelForm):
    class Meta:
        model = FacebookGame
        fields = ('title', 'body', 'banner_image', 'buzz', 'age_categories', 'publish', 'tags', )
        widgets = {
            'tags': autocomplete.ModelSelect2(url='tags-autocomplete', attrs={
                'data-placeholder': _('Select Tags'),
            })
        }
