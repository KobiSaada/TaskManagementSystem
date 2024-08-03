# Task Management System API

## Objective

Develop a RESTful API for a simple task management system that allows users to manage projects and tasks. User authentication will be implemented using AWS Cognito. The code should be clean, well-documented, and adhere to best practices.

## Assignment Requirements

### Project Setup

1. **Initialize Project:**
   - Set up a Node.js project using TypeScript.
   - Use Express.js or another Node.js framework.

2. **Database Interaction:**
   - Utilize Mongoose as the ORM for MongoDB.

### Core Features

#### User Authentication

- Implement authentication using AWS Cognito User Pool.
- Users can be created manually for this task.

#### Project Management

- **CRUD Operations:** Create, Read, Update, and Delete projects.
- **Attributes:** Each project should have a name and description.

#### Task Management

- **CRUD Operations:** Create, Read, Update, and Delete tasks within a project.
- **Attributes:** Each task should have a title, description, and status (e.g., todo, in-progress, done).

### Additional Features

- **Logging & Error Handling:** Implement basic logging and error handling mechanisms.
- **Pagination:** Implement pagination for GET requests.
- **Role-Based Access Control:** (Optional) Implement roles like admin and user to manage permissions.

### Testing

- **Unit Testing:** Write unit tests for core functionality using Jest or a similar testing framework.

## Deployment Suggestion

**Recommended Deployment Approach:**

**Containerization:**

- **Use Docker to containerize the application.** 
- **Reason:** Docker provides a consistent environment for the application across different stages of development and production. It packages the application along with its dependencies, ensuring that it runs the same way regardless of where it is deployed. This approach simplifies the deployment process, enhances scalability, and makes it easier to manage and update the application.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:KobiSaada/TaskManagementSystem_MOVEO.git
   cd task-management-api
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file based on `.env.example` and configure the necessary variables.

4. **Run the Application:**
   ```bash
   npm start
   ```

5. **Run Tests:**
   ```bash
   npm test
   ```

## Documentation

For detailed API documentation, refer to the `/docs` directory or visit the [API Documentation](#) (link to be provided).

---

For further questions or assistance, feel free to reach out. Happy coding!
