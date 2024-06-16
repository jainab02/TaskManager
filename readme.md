# Personal Task Manager Application

This is a simple web application that allows users to manage their daily tasks. The application provides functionalities to add, edit, delete, and list tasks.

## Objective

Develop a simple web application that allows users to manage their daily tasks.

## Tools and Technologies

- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **API Testing:** Postman or any similar tool

## Requirements

### Database Setup

Use MongoDB to create a database named `taskmanager`.

Define a schema for a `tasks` collection where each task will have the following fields:
- `title`: String
- `description`: String
- `status`: String (e.g., "Pending", "Completed")
- `createdAt`: Date
- `updatedAt`: Date

### Backend Development

Set up a Node.js server using the Express framework.

Implement API endpoints for the following actions:
- `POST /tasks` - Create a new task.
- `GET /tasks` - Retrieve all tasks.
- `GET /tasks/:id` - Retrieve a single task by ID.
- `PUT /tasks/:id` - Update a task by ID.
- `DELETE /tasks/:id` - Delete a task by ID.

Use Mongoose to interact with the MongoDB database from your Express application.

### Frontend Development

Create a React application setup using `create-react-app`.

Develop components to:
- Display a list of tasks.
- Add a task using a form.
- Edit a task using a modal or a separate form.
- Delete a task with a confirmation prompt.

Use Axios or Fetch API to communicate with the backend.

### State Management

Manage state locally within components or use React Context API or Redux for more complex state management (optional depending on the complexity of the application).

### Styling

Use CSS or a CSS framework like Bootstrap or Material-UI to style the application.

### Testing and Documentation

Test API endpoints using Postman.

Write basic documentation that includes setup instructions, API usage details, and an overview of functionalities.

## Installation

### Clone the Repository

```sh
git clone https://github.com/your-username/todo-app.git
cd todo-app

Backend Setup
Navigate to the backend directory:

sh
Copy code
cd backend
Install backend dependencies:

sh
Copy code
npm install
Copy the contents of env.example to .env:

sh
Copy code
cp env.example .env
Update the .env file with your MongoDB connection string and other necessary environment variables:

env
Copy code
MONGODB_URI=your_mongodb_uri
PORT=3000
Start the backend server:

sh
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

sh
Copy code
cd ../frontend
Install frontend dependencies:

sh
Copy code
npm install
Start the frontend development server:

sh
Copy code
npm start
```

API Documentation
The API documentation is done using Swagger. You can access the Swagger documentation at http://localhost:3000/api-docs.

Swagger JSON Configuration
The swagger.json file defines the structure of the API and can be found in the backend directory. Here is an example of the configuration:

```{
  "openapi": "3.0.0",
  "info": {
    "title": "TO-DO API",
    "description": "API documentation for TO-DO application",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000"
    }
  ],
  "paths": {
    "/api/tasks": {
      "get": {
        "summary": "Get all tasks",
        "responses": {
          "200": {
            "description": "A list of tasks",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Task"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a new task",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Task"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "The created task",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            }
          }
        }
      }
    },
    "/api/tasks/{taskId}": {
      "put": {
        "summary": "Update a task",
        "parameters": [
          {
            "in": "path",
            "name": "taskId",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "The ID of the task to update"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Task"
              }
            }
          },
          "responses": {
            "200": {
              "description": "The updated task",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Task"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "summary": "Delete a task",
          "parameters": [
            {
              "in": "path",
              "name": "taskId",
              "required": true,
              "schema": {
                "type": "string"
              },
              "description": "The ID of the task to delete"
            }
          ],
          "responses": {
            "204": {
              "description": "The task was deleted successfully"
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Task": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": ["Pending", "Completed"]
          }
        },
        "required": ["title", "description", "status"]
      }
    }
  }
}
```

Testing
API testing is done using Postman. You can import the provided Postman collection to test the API endpoints.

Technology Stack
Frontend: React
Backend: Node.js, Express
Database: MongoDB
Project Structure
```.
├── backend
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   └── swagger.json
└── frontend
    ├── package.json
    └── src
```