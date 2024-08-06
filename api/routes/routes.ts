import express, { Request, Response } from 'express';
import { isAdmin } from '../utils/authutils'; // Adjust the import path as necessary
import userRoutes from './userAuth.routes';
import projectRoutes from './project.routes';
import taskRoutes from './task.routes';
import checkRole from '../middleware/rolechecking';
import verifyToken from '../middleware/authMiddleware'; 

const router = express.Router();

// Admin-only route example
router.get('/admin', verifyToken, checkRole('admin'), (req, res) => {
  res.json({ message: 'This is an admin route', user: req.user });
});

// Use the individual routers
router.use('/api/users', userRoutes);
router.use('/api/projects', projectRoutes);
router.use('/api/tasks', taskRoutes);
export default router;
