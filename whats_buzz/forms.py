from django import forms


class ContactForm(forms.Form):
    contact_name = forms.CharField()
    content = forms.CharField(widget=forms.Textarea)