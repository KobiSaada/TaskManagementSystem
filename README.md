
# Task Management System API: :chart_with_upwards_trend:

## Objective

Develop a RESTful API for a simple task management system that allows users to manage projects and tasks. User authentication is implemented using AWS Cognito.

## Design Structure (Next.js client-side and Docker not implemented yet)
![Untitled Diagram drawio (2)](https://github.com/user-attachments/assets/e2e32c05-03f1-4b10-a743-36640498fa45)



## Project Structure
   ```bash
task-management-system/
├── api/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── config/
│   │   ├── Enums/
│   │   ├── logs/
│   │   ├── types/
│   │   │   └── express/
│   │   ├── MongoDB/
│   │   ├── app.ts
│   │   └── index.ts
│   ├── test/
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
   ```


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
- **Reason:** For handling 10,000 users a day, use Docker for containerization. Docker makes it easy to scale your application by running multiple instances when traffic increases. It also ensures consistency and efficient resource usage, making it ideal for large-scale deployments.




## Getting Started

### How to Run It

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:KobiSaada/TaskManagementSystem_MOVEO.git
   cd task-management-system
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
Create a `.env` file and add the necessary environment variables:
   - MONGO_URI=''
   - PORT=''
   - COGNITO_CLIENT_ID=''
   - USER_POOL_ID=''
   - AWS_REGION=''

5. **Run the Application:**
   ```bash
   npm start
   ```

6. **Test With Curl:**
   ```bash
    curl -X POST http://localhost:3002/api/users/register \
          -H "Content-Type: application/json" \
          -d '{"email": "kobiman5@gmail.com", "password": "Test123@", "username": "kobisaada", "role": "user"}'
   ```
   

7. **Run Tests(need to implement):**
   ```bash
   npm test
   ```

---

For further questions or assistance, feel free to reach out. Happy coding! :smiley:

