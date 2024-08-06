import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/routes'; // Main router with sub-routes
import errorHandler from './middleware/errorHandler';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()); 
app.use(routes);

// Error handling middleware should be last
app.use(errorHandler);

export default app;
