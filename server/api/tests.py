from django.test import TestCase
from django.utils.translation import activate


def test_uses_index_template(self):
    activate('en')
    response = self.client.get(reverse("v1"))
    self.assertTemplateUsed(response, "taskbuster/index.html")


def test_internationalization(self):
    for lang, h1_text in [('en', 'Welcome to TaskBuster!'),
                                ('ca', 'Benvingut a TaskBuster!')]:
        activate(lang)
        self.browser.get(self.get_full_url("home"))
        h1 = self.browser.find_element_by_tag_name("h1")
        self.assertEqual(h1.text, h1_text)
