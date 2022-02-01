FROM node:17

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

CMD /bin/bash ./publish.sh