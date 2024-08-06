import express from 'express';
import  verifyToken  from '../middleware/authMiddleware'; // Ensure users are authenticated
import checkRole from '../middleware/rolechecking';
import { adminControllerFunction } from '../controllers/AdminController';

const router = express.Router();

// Apply verifyToken middleware to protect the routes
router.use(verifyToken);

// Admin routes
router.get('/admin/data', checkRole('admin'), adminControllerFunction);

export default router;
