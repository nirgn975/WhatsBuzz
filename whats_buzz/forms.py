from django import forms


class ContactForm(forms.Form):
    contact_name = forms.CharField()
    content_checkbox = forms.BooleanField()
    content = forms.CharField(widget=forms.Textarea)