// userRoutes.ts
import express from 'express';
import { registerUser, loginUser } from '../controllers/userAuth.controller';  // Adjust the path as necessary


const router = express.Router();

// Routes for user-related operations
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
