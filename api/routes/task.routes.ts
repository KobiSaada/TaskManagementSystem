// taskRoutes.ts
import express, { Router } from 'express';
import verifyToken from '../middleware/authMiddleware'; 
import {
  addTask,
  listTasks,
  getTask,
  updateTask,
  deleteTask
} from '../controllers/task.controller';

const router: Router = express.Router();

// Secure these routes as well
router.post('/add', verifyToken, addTask);
router.get('/list/:projectId', verifyToken, listTasks);
router.get('/detail/:taskId', verifyToken, getTask);
router.put('/update/:taskId', verifyToken, updateTask);
router.delete('/delete/:taskId', verifyToken, deleteTask);

export default router;
