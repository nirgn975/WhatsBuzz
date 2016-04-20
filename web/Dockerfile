FROM python:3.5-onbuild
MAINTAINER Nir Galon <nirgn975@gmail.com>
ENV PYTHONUNBUFFERED 1

RUN apt-get update

# Add a bash script to finalize all
ADD run.sh /usr/src/app/run.sh
RUN chmod +x /usr/src/app/run.sh

ADD . /usr/src/app/
WORKDIR /usr/src/app
