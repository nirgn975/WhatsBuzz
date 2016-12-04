"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 1.10.1.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.10/ref/settings/
"""
from django.utils.translation import ugettext_lazy as _
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ''

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
CORS_ORIGIN_REGEX_WHITELIST = (
    '^(localhost:)*',
    '^(https://whatsbuzz-production-env.appspot.com)*',
    '^(https://whatsbuzz-production-env.firebaseapp.com)*',
)

ALLOWED_HOSTS = ['*']


# Application definition
INSTALLED_APPS = [
    'modeltranslation',
    'api',
    'whatsbuzz',

    'ckeditor',
    'dal',
    'dal_select2',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'django_extensions',
    'rest_framework',
    'corsheaders',
    'storages',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.i18n',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.10/ref/settings/#databases
DATABASES = {
    # Google Cloud Platform Database.
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '3306',
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Django REST Framework
# http://www.django-rest-framework.org/
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    'PAGE_SIZE': 10,
}


# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/
LANGUAGE_CODE = 'he'
LANGUAGES = [
    ('he', _('Hebrew')),
    ('en', _('English')),
]

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'whatsbuzz/locale'),
)

TIME_ZONE = 'Asia/Jerusalem'
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Google Cloud Storage
# http://django-storages.readthedocs.org/en/latest/backends/apache_libcloud.html
BUCKET_NAME = ''
LIBCLOUD_PROVIDERS = {
    'google': {
        'type': 'libcloud.storage.types.Provider.GOOGLE_STORAGE',
        'user': '',
        'key': '',
        'bucket': BUCKET_NAME,
    }
}

DEFAULT_LIBCLOUD_PROVIDER = 'google'
DEFAULT_FILE_STORAGE = 'storages.backends.apache_libcloud.LibCloudStorage'
STATIC_URL = 'https://storage.googleapis.com/' + BUCKET_NAME + '/static/'


# CKEditor - WYSIWYG editor.
# https://github.com/django-ckeditor/django-ckeditor
CKEDITOR_JQUERY_URL = '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'Custom',
        'toolbar_Custom': [
            ['Font', 'FontSize'],
            ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat'],
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-',
             'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'],
            ['Link', 'Unlink'],
            ['TextColor', 'BGColor'],
        ]
    }
}


# Importing local settings if exists.
try:
    from .local_settings import *
except ImportError:
    pass
