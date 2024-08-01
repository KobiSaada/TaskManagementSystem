// projectRoutes.ts
import express, { Router } from 'express';
import verifyToken from '../middleware/authMiddleware'; 
import {
  createProject,
  listProjects,
  getProject,
  updateProject,
  deleteProject
} from '../controllers/project.controller';

const router: Router = express.Router();

// Apply authentication middleware to protect these routes
router.post('/create', verifyToken, createProject);
router.get('/list', verifyToken, listProjects);
router.get('/detail/:id', verifyToken, getProject);
router.put('/update/:id', verifyToken, updateProject);
router.delete('/delete/:id', verifyToken, deleteProject);

export default router;
