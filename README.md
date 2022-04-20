# Node API with TypeScript and MongoDB

### This is a simple rest api with typescript and mongodb

![Capture 1](assets/node.png)

![Capture 3](assets/docker.png)
--------------------------------

![Capture 2](assets/ts.png)
--------------------------------

![Capture 4](assets/mongo.png)
--------------------------------

--------------------------------

# Installation


+ npm i 

+ Run the project in Dev mode
```
npm run dev
```

+ Build the project. This generate a dist folder with the javascript files
```
npm run build
```

+ Run the project in Development
```
npm run dev
```

+ You must have installed Mongodb to run locally

+ If you have mongodb then you can execute npm star in your local server. This project run on port 8000

```
npm run start
````


# Dockerfile

### This project contains the Dockerfile to create containers

### To create the image

```
docker build -t appname .
```

### To run the container
```
docker run -it -p 8000:8000 appname
```

### docker Compose
```
docker-compose build
```
### Up the docker compose image

```
docker-compose up
```

### Off the docker compose image

```
docker-compose down
```

### Created by Userlg