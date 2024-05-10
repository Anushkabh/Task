# Task Manager API Documentation

## Authentication Endpoints

### Register User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user with a college email.
- **Request Body**:
  - `name` (string): User's name.
  - `email` (string): User's college email.
  - `password` (string): User's password.
- **Success Response**:
  - **Code**: `201`
  - **Content**: 
    ```json
    {
      "message": "User registered successfully.",
      "token": "JWT_token_here"
    }
    ```
- **Error Response**:
  - **Code**: `400`
  - **Content**: 
    ```json
    {
      "error": "Email is already registered."
    }
    ```

### Login User
- **URL**: `/auth/login`
- **Method**: `POST`
- **Description**: Logs in a user with a college email and password.
- **Request Body**:
  - `email` (string): User's college email.
  - `password` (string): User's password.
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
      "token": "JWT_token_here",
      "user": {
        "id": "user_id_here",
        "name": "User's Name",
        "email": "user@example.com",
        "lastLogin": "Date and Time"
      }
    }
    ```
- **Error Response**:
  - **Code**: `401`
  - **Content**: 
    ```json
    {
      "error": "User Not Found"
    }
    ```


### Logout User
- **URL**: `/auth/logout`
- **Method**: `POST`
- **Description**: Logs out the user.
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
      "message": "Logout successful."
    }
    ```

## Task Management Endpoints

### Add Task
- **URL**: `/tasks`
- **Method**: `POST`
- **Description**: Adds a new task.
- **Request Body**:
  - Provide task details according to your schema.
- **Success Response**:
  - **Code**: `201`
  - **Content**: 
    ```json
    {
      "task": {
        "id": "task_id_here",
        
      }
    }
    ```
- **Error Response**:
  - **Code**: `400`
  - **Content**: 
    ```json
    {
      "error": "Error message here"
    }
    ```

### Get All Tasks by Priority
- **URL**: `/tasks`
- **Method**: `GET`
- **Description**: Retrieves all tasks categorized by priority.
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
      "High": [...],
      "Medium": [...],
      "Low": [...]
    }
    ```
- **Error Response**:
  - **Code**: `500`
  - **Content**: 
    ```json
    {
      "error": "Error message here"
    }
    ```

### Get Tasks by Priority
- **URL**: `/tasks/:priority`
- **Method**: `GET`
- **Description**: Retrieves tasks by priority (High, Medium, Low).
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    [
      {
        "id": "task_id_here",
    
      },
      ...
    ]
    ```
- **Error Response**:
  - **Code**: `500`
  - **Content**: 
    ```json
    {
      "error": "Error message "
    }
    ```

### Get Task by ID
- **URL**: `/tasks/:id`
- **Method**: `GET`
- **Description**: Retrieves a task by its ID.
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
      "id": "task_id_here",
      
    }
    ```
- **Error Response**:
  - **Code**: `404`
  - **Content**: 
    ```json
    {
      "message": "Task not found"
    }
    ```

### Update Task by ID
- **URL**: `/tasks/:id`
- **Method**: `PATCH`
- **Description**: Updates a task by its ID.
- **Request Body**:
  - Provide fields to update according to your schema.
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
      "id": "task_id_here",
      
    }
    ```
- **Error Response**:
  - **Code**: `400`
  - **Content**: 
    ```json
    {
      "error": "Invalid updates!"
    }
    ```

### Delete Task by ID
- **URL**: `/tasks/:id`
- **Method**: `DELETE`
- **Description**: Deletes a task by its ID.
- **Success Response**:
  - **Code**: `200`
  - **Content**: 
    ```json
    {
      "id": "task_id_here",
      
    }
    ```
- **Error Response**:
  - **Code**: `404`
  - **Content**: 
    ```json
    {
      "message": "Task not found"
    }
    ```


