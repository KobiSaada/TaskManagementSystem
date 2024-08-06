
# Task Management System API: :chart_with_upwards_trend:

## Objective

Develop a RESTful API for a simple task management system that allows users to manage projects and tasks. User authentication is implemented using AWS Cognito.

## Assignment Requirements

### Frameworks & Databases

1. **Initialize Project:**
   - Set up a Node.js project using TypeScript.
   - Use Express.js as the framework.

2. **Database Interaction:**
   - Utilize Mongoose as the ORM for MongoDB.

### Core Features

#### User Authentication

- Implement user authentication using AWS Cognito User Pool.
- Synchronize data between MongoDB and AWS Cognito.
- Include user confirmation functionality.

#### Project Management

- **CRUD Operations:** Implement Create, Read, Update, and Delete functionalities for projects.
- **Attributes:** Each project should have a name and description.

#### Task Management

- **CRUD Operations:** Implement Create, Read, Update, and Delete functionalities for tasks within a project.
- **Attributes:** Each task should have a title, description, and status (e.g., todo, in-progress, done).

### Additional Features

- **Logging & Error Handling:** Implement basic logging and error handling mechanisms.
- **Pagination:** Implement pagination for GET requests.
- **Role-Based Access Control:** Implement roles like admin and user to manage permissions.

### Testing

- **Unit Testing:** Implement unit tests for core functionalities using Jest.

## Deployment Suggestion

### Recommended Deployment Approach

#### Containerization

- **Use Docker to containerize the application.** 
- **Reason:** Docker provides a consistent environment for the application across different stages of development and production. It packages the application along with its dependencies, ensuring consistent behavior regardless of the deployment environment. This approach simplifies the deployment process, enhances scalability, and facilitates easier management and updates of the application.

## Getting Started

### How to Run It

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:KobiSaada/TaskManagementSystem_MOVEO.git
   cd task-management-system
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file and add the necessary environment variables.

4. **Run the Application:**
   ```bash
   npm start
   ```

5. **Run Tests:**
   ```bash
   npm test
   ```

---

For further questions or assistance, feel free to reach out. Happy coding! :smiley:

