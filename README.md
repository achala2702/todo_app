# Todo App

A full-stack todo application built with modern web technologies, featuring a React frontend, Spring Boot backend, and PostgreSQL database, all containerized with Docker for easy deployment.

## Tech Stack

- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Containerization**: Docker & Docker Compose

## Prerequisites

Before running this application, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Git

## Installation & Setup

Follow these steps to get the application up and running:

1. **Clone the repository**
   ```bash
   git clone git@github.com:achala2702/todo_app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd todo_app
   ```

3. **Build and run the application**
   ```bash
   docker compose up --build
   ```

4. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Features

- Create, read, update, and delete todos
- Persistent data storage with PostgreSQL
- Responsive user interface
- Fully containerized application

## Docker Services

The application consists of three main services:

- **Frontend**: React development server running on port 5173
- **Backend**: Spring Boot API server running on port 8080
- **Database**: PostgreSQL database

## Stopping the Application

To stop the application, press `Ctrl + C` in the terminal where Docker Compose is running, or run:

```bash
docker compose down
```