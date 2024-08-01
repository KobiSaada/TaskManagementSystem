import express from 'express';
import bodyParser from 'body-parser';
//import { authMiddleware } from './middleware/authMiddleware';
import routes from './ routes/routes'

import errorHandler from './middleware/errorHandler';


// Import routes
import projectRoutes from './ routes/project.routes'
import taskRoutes from './ routes/task.routes';

const app = express();

// Middlewares
app.use(bodyParser.json());
//app.use(authMiddleware);
// Use the admin router for routes starting with /admin
app.use(routes);

app.use(errorHandler);
// Basic route for testing the setup
app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API!');
});

// Route handlers
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;
