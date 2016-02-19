FROM python:3-onbuild
MAINTAINER Nir Galon "nirgn975@gmail.com"

RUN mkdir /code
WORKDIR /code

RUN apt-get -y update

# Download and install pip
RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3 get-pip.py

# Install git
RUN apt-get install git

# Install python requirements.
# ADD requirements.txt /code/
# RUN pip install -r requirements.txt

# Install front-end
# RUN apt-get -y install nodejs npm
# ADD package.json /code/
# RUN npm install

ADD . /code/
