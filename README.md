# Whats Buzz

[![Build Status][travis-image]][travis-url]

Something about the project.

## Our Stack

  * [Angular](https://angular.io/) 
  * [Django](https://www.djangoproject.com/)
  * [PostgreSQL](http://www.postgresql.org/)

**Tools we use**

  * [Bootstrap](http://getbootstrap.com/)
  * [Angular-CLI](https://cli.angular.io/)
  * [Google Cloud Platform](https://cloud.google.com/)
  * [Facebook API](https://developers.facebook.com/)

## Pre Requirements

  1. Make sure you have Python 3.x and pip installed.
  2. [NodeJS](nodejs.org).
  3. [Angular CLI](https://github.com/angular/angular-cli).
  4. [Google Cloud Platform](https://cloud.google.com/).

## Installation

**Client**

  1. `npm install` inside the `client` directory.
  2. Open the browser at [http://localhost:4200](http://localhost:4200).

**Server**

  1. `cd server/config` then `cp local_settings.template local_settings.py` and modify it by your local settings.
  2. Install requirements with `pip install -r requirements.txt` (located under `server` directory).
  3. Migrate the data with `python manage.py migrate`.
  4. Import the dummy data with `python manage.py import_data`.
  5. Run the server with `python manage.py runserver`.
  6. Open the browser at [http://localhost:8000](http://localhost:8000).

## Tests

**Client**

  * Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
  * Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

**Server**

  * Not yet.


## Translation

To make new strings for translation use the command

```shell
python manage.py makemessages -l he
```

## Deploy

Not yet..

[travis-image]: https://travis-ci.org/nirgn975/WhatsBuzz.svg?branch=master
[travis-url]: https://travis-ci.org/nirgn975/WhatsBuzz
