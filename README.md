# User Database API

This project implements API for managing users in a MongoDB database.

## Features

- Fetch a list of users sorted by level in descending or ascending order.

- GET /users?level=-1 # Sort by level in descending order (default)
- GET /users?level=1 # Sort by level in ascending order

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Use .env file.

- add MONGO_URI format MongoDB mongodb://
- add PORT to start server

3. All start

   ```bash
    docker-compose -p server up -d --build
   ```
