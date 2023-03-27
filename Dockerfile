FROM node:19-alpine as builder

# update packages
RUN apk update && apk upgrade

# create root application folder
ENV APP_HOME /usr/src/app

WORKDIR "$APP_HOME"

RUN mkdir -p "$APP_HOME"

# copy configs to /app folder
COPY package*.json ./

COPY tsconfig.json ./
# copy source code to /app/src folder
COPY . "$APP_HOME"

# check files list
RUN ls -a

RUN npm install

RUN npm fund

RUN npm run build

FROM node:19-alpine

ENV APP_HOME /usr/src/app

RUN mkdir -p -v "$APP_HOME"

WORKDIR "$APP_HOME"

COPY --from=builder "$APP_HOME" $APP_HOME

EXPOSE 8000

CMD [ "npm", "start" ]
