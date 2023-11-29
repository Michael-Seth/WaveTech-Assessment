Certainly! Below is a README file for the root folder of your project, including instructions on how to start the application using Docker.

```markdown
# Wave Tech Assessment

## Table of Contents

- [Wave Tech Assessment](#wave-tech-assessment)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Prerequisites](#prerequisites)
- [Installation](#installation)
    - [Using Docker](#using-docker)
    - [Manual Setup](#manual-setup)
      - [1. Setup Database with XAMPP](#1-setup-database-with-xampp)
      - [2. Configure Environment Variables](#2-configure-environment-variables)
      - [3. Install Dependencies](#3-install-dependencies)
      - [4. Database Seeding](#4-database-seeding)
      - [5. Start the Application](#5-start-the-application)
- [Environment Configuration](#environment-configuration)
- [Database Configuration](#database-configuration)
- [JWT Configuration](#jwt-configuration)
  - [Database Seeding](#database-seeding)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This is a full-stack application built with NestJS and React Vite for the backend and frontend, respectively. The backend serves as an API with authentication and a MySQL database, while the frontend provides a modern user interface.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- [Docker](https://www.docker.com/) installed

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Michael-Seth/WaveTech-Assessment
   ```

2. Navigate to the project directory:

   ```bash
   cd wave_tech
   ```

3. Install dependencies:

   ```bash
   # For the server
   cd wave_tech_server
   npm install

   # For the client
   cd ../wave_tech_client
   npm install
   ```

## Installation

### Using Docker

1. Make sure you have Docker installed on your machine.
2. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

3. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

4. Create a `.env` file and configure the necessary environment variables (see [Environment Configuration](#environment-configuration)).

5. Run the application with Docker:

   ```bash
   docker-compose up
   ```

### Manual Setup

#### 1. Setup Database with XAMPP

- Download and install [XAMPP](https://www.apachefriends.org/index.html) from the official website.
- Open the XAMPP control panel and start the MySQL and Apache servers.
- Visit [http://localhost/phpmyadmin](http://localhost/phpmyadmin) and create a new database named `assessment`.

#### 2. Configure Environment Variables

Create a `.env` file in the root directory and set the following environment variables:

```env
NODE_ENV=development
APP_PORT=5000
APP_NAME="NestJS API"
API_PREFIX=api
BACKEND_DOMAIN=http://localhost:5000

DATABASE_TYPE=mysql
DATABASE_URL=
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_NAME=assessment
DATABASE_SYNCHRONIZE=true

JWT_SECRET=Michael78
AUTH_JWT_TOKEN_EXPIRES_IN=7d

CALL_BACK_URL=http://localhost:5000
```

#### 3. Install Dependencies

Navigate to the server directory:

```bash
cd wave_tech_server
```

Install dependencies:

```bash
npm install
```

#### 4. Database Seeding

Seed data into the database:

```bash
npm run seed
```

#### 5. Start the Application

Start the NestJS server:

```bash
npm run start
```

Visit [http://localhost:5000/api](http://localhost:5000/api) to access the application.


## Environment Configuration

1. Copy the `.env-example` file in both the `wave_tech_server` and `wave_tech_client` directories to create new `.env` files:

   ```bash
   # For the server
   cp .env-example .env

   # For the client
   cd ../wave_tech_client
   cp .env-example .env
   ```

2. Update the `.env` files with the necessary configuration for your project, including the database connection details, JWT secret, etc.

   - [Server .env Configuration](#database-configuration)
   - [Client .env Configuration](#client-environment-configuration)

### Database Configuration

- [Server .env Configuration](#database-configuration)

### JWT Configuration

- [Server .env Configuration](#jwt-configuration)

#### Database Seeding

To seed data into the MySQL database, run the following command:

```bash
cd wave_tech_server
npm run seed
```

## API Endpoints

- **POST /api/login**: Login with the provided credentials.
- **GET /api/hospitals**: Get a list of hospitals.
- **GET /api/users/:id**: Get user details by ID.

Example usage:

```bash
# Login
curl -X POST -H "Content-Type: application/json" -d '{"email": "michaelosas78@gmail.com", "password": "Michael007"}' http://localhost:5000/api/login

# Get list of hospitals
curl http://localhost:5000/api/hospitals

# Get user details by ID
curl http://localhost:5000/api/users/1
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.
```
