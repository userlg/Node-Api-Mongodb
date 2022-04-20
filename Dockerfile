FROM node:16-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /usr/src/app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY . .

# check files list
RUN ls -a

RUN npm install

RUN npm fund

RUN npm run build

EXPOSE 8000

CMD [ "node", "./dist/index.js" ]
