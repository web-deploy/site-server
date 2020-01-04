FROM node:10.14.0-alpine

MAINTAINER 18410408685@163.com

WORKDIR /var/www/site/site-server

COPY package.json /var/www/site/site-server

RUN cd /var/www/site/site-server

RUN npm i

COPY . /var/www/site/site-server


EXPOSE 7001

CMD ["npm", "start"]