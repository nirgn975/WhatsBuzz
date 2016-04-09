#!/bin/bash

echo "[run] go to project folder"
cd /usr/src/app/

echo "[run] Install npm dependencies"
npm install 

echo "[run] gulp deploy"
npm run gulp deploy

echo "[run] syncdb"
python3 manage.py syncdb --noinput

echo "[run] Migrate DB"
python3 manage.py migrate

echo "[run] create superuser"
echo "from django.contrib.auth.models import User
if not User.objects.filter(username='admin').count():
    User.objects.create_superuser('admin', 'admin@example.com', 'pass')
" | python3 manage.py shell

echo "[run] runserver"
#python3 manage.py runserver 0.0.0.0:8000
/usr/local/bin/gunicorn WhatsBuzz.wsgi:application -w 2 -b :8000 --reload
