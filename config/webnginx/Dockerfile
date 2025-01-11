FROM nginx:latest
RUN apt -y update && apt -y upgrade
RUN apt -y install vim htop iputils-ping
ADD conf.d /etc/nginx/conf.d
