from __future__ import absolute_import, unicode_literals

import os
import dj_database_url
from .base import *

#ALLOWED_HOSTS = ['share.osf.io/dashboard']
ALLOWED_HOSTS = ['*']
DEBUG=False

if os.environ.get('DEIS'):
    DATABASES = {
        'default': {
            'ENGINE': os.environ.get('DATABASE_ENGINE'),
            'NAME': os.environ.get('DATABASE_NAME'),
            'USER': os.environ.get('DATABASE_USER'),
            'PASSWORD': os.environ.get('DATABASE_PASSWORD'),
            'HOST': os.environ.get('DATABASE_HOST'),
            'PORT': os.environ.get('DATABASE_PORT'),
        }
    }
else:
    DATABASES['default'] = dj_database_url.config() # For Heroku


SECRET_KEY = os.environ['SECRET_KEY']

try:
    from .local import *
except ImportError:
    pass
