FROM python:3.5-onbuild
MAINTAINER Nir Galon <nirgn975@gmail.com>
ENV PYTHONUNBUFFERED 1

RUN apt-get update

# Install nodejs for npm modules.
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs

# Install npm dependencies.
COPY package.json /usr/src/app/
RUN \
  npm install \
  gulp deploy

# add a bash script to finalize all
ADD run.sh /usr/src/app/run.sh
RUN chmod +x /usr/src/app/run.sh

# default command to run
#CMD /usr/src/app/init_project.sh

# Create superuser.
#COPY init_project.sh /usr/src/app/

# Suppose you have run.sh in the same directory as the Dockerfile
#ADD init_project.sh /usr/src/app/init_project.sh
#RUN chmod +x /usr/src/app/init_project.sh
#CMD ["/usr/src/app/init_project.sh"]
