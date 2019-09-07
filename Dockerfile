FROM node:alpine
LABEL author "Jonathan M. Wilbur <jonathan@wilbur.space>"
COPY . /srv
WORKDIR /srv
CMD [ "/usr/local/bin/node", "/srv/dist/index.js" ]