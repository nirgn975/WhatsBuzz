#!/bin/bash

echo "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'whatsbuz@gmail.com', 'admin12345')" | python manage.py shell
