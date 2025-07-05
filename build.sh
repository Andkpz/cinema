#!/usr/bin/env bash
# exit on error


# Установка Python зависимостей


# Очистка старых статических файлов
python manage.py collectstatic --no-input --clear

# Сборка фронтенда
cd frontend
npm install
npm run build
cd ..

# Сборка бэкенда
python manage.py collectstatic --no-input
python manage.py migrate

# Создание суперпользователя
python create_superuser.py 
