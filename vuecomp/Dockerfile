FROM node:17

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

# https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
ENV NODE_OPTIONS=--openssl-legacy-provider

CMD /bin/bash ./publish.sh