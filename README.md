# Task Tracker App

A full-stack task tracking application built with **Node.js**, **Express.js**, and **MySQL**, emphasizing clean architecture and modularity.

## Features

- **Task Management**: Create, read, update, and delete tasks.
- **Backend**: Express.js server handling API requests.
- **Database Integration**: MySQL database managed with Prisma ORM.
- **Dockerized Environment**: Easy setup and deployment using Docker.

## Technologies Used

- **Backend**: Express.js, Node.js
- **Database**: MySQL, Prisma ORM
- **Containerization**: Docker, Docker Compose
- **Version Management**: NVM (Node Version Manager)


### Prerequisites

- **Node.js**: Ensure you have Node.js installed. This project uses version `20.9.0`.
- **NVM**: Node Version Manager is recommended for managing Node.js versions.
- **Docker**: Required for containerizing the application and database.
- **Git**: For cloning the repository.
  
## Installation

- To run locally, install dependencies. Install nvm if no version found.
  ```sh
    nvm -v
  ```
  ```sh
    nvm install 20.9.0
    ```
  ```sh
    nvm use 20.9.0
  ```
  ```sh
    npm install
  ```

### Environment variables

- Copy and paste .env.example variables into a .env file or create your own variables.
- Need to have setup own cloud db

## Set up Prisma DB, locally if have cloud db
``` sh
  npx prisma generate
  npx prisma db push
  npm runn seed
```

### Run Docker

- Setup the database - make sure Docker is running first & run docker on root folder
- Run database migrations and seed data:
- this will run server
  - ```sh
    docker compose up --build
    docker-compose exec -it server npx prisma migrate dev --name init
    docker-compose exec -it server npm run seed
    ```

### Starting Server

```sh
npm run start
# go to http://localhost:3001
```

### REST API EndPoints

- REST API Endpoints:
- `GET /tasks`
- `POST /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`
