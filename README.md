## Setup

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

### Run Docker

- Setup the database - make sure Docker is running first & run docker on root folder
- Run database migrations and seed data:
- this will run server
  - ```sh
    docker compose up --build
    - while running docker container, open another terminal and follow commands below
    docker exec -it server npx prisma migrate dev --name init
    docker exec -it server npm run seed
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
