FROM node:lts-alpine
RUN apk update && apk upgrade
RUN apk add vim htop iputils-ping bc rsync curl openssh
RUN npm install -g npm@11
RUN npm install pm2 -g
RUN npm install sharp -g
COPY ecosystem.config.js .
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
