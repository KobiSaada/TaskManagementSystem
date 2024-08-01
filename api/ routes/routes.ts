import express, { Request, Response } from 'express';
import { isAdmin } from '../utils/authutils'; // Adjust the import path as necessary
import userRoutes from './userAuth.routes';
import projectRoutes from './project.routes';
import taskRoutes from './task.routes';
const router = express.Router();

// Admin route example
router.get('/admin-route', (req: Request, res: Response) => {
  const user = (req as any).user; // TypeScript cast to access user property

  if (!user || !isAdmin(user.groups)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Proceed with admin-specific logic
  res.send('Welcome to the admin route!');
});

// Use the individual routers
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);
export default router;
