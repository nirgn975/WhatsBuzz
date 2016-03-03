#!/bin/bash

echo "[run] go to project folder"
cd /usr/src/app/

echo "[run] Install npm dependencies"
npm install 

echo "[run] gulp deploy"
gulp deploy

echo "[run] syncdb"
python manage.py syncdb --noinput

echo "[run] Migrate DB"
python manage.py migrate

echo "[run] create superuser"
echo "from django.contrib.auth.models import User
if not User.objects.filter(username='admin').count():
    User.objects.create_superuser('admin', 'admin@example.com', 'pass')
" | python manage.py shell

echo "[run] runserver"
python manage.py runserver 0.0.0.0:8000
