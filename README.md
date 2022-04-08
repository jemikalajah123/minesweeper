# minesweepers-game-app

A React/Redux-Saga game application, that connects to a web socket to play.

## APP URL
This application is hosted on heroku. Click here to view the application https://minesweepers-game.netlify.app/
### Development Environment

### Setup

Ensure you have the following softwares installed:

- [Node](https://nodejs.org)
- [Docker](https://docs.docker.com/install/) (if you need to run as container)
- [Git](https://www.atlassian.com/git/tutorials/install-git)

Clone the [repository](https://github.com/sodiadrhain/movie-web-app.git) and proceed with the instructions below.

### Running App locally

This app is written with ReactJs; Enter the folloeing commands to start app locally

## Project setup

```
cd minesweeper
```

```
npm install
```

```
npm run start
```

### Open browser and visit or Open Postman to make a request

```
http://localhost:3000
```

## Running as Docker Container

**From within the project directory run the following:**

```
npm run docker:bash
```

to build image and container for app

when this is done, app will basically start on port `8080`.

### Viewing the running ports

Open a new terminal window and run the following command:

```
docker ps
```

You will be given a printout showing your running containers. Part of the printout should contain something like this:

```
.....   0.0.0.0:8080->8080/tcp,     minesweeper-app

```

This tells you that the various machines exist "locally" at 0.0.0.0 and that the exposed service port have been mapped to port 6000.

### Stopping Container

To stop the docker development environment, issue the following command from the project root:

```
npm run docker:down
```

This will stop all the container and related to this project.

### Starting Container

To start the docker development environment another time run:

```
npm run docker:up
```

This will start the container again.

### View the Home Page

To load the homepage of the app, visit the url below in a browser:

    http://0.0.0.0:8080

Thus your adventure begins... The project is up and running.
