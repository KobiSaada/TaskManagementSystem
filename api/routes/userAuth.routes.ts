// userRoutes.ts
import express from 'express';
import { registerUser, loginUser,confirmUserController, deleteUser } from '../controllers/userAuth.controller';  // Adjust the path as necessary


const router = express.Router();

// Routes for user-related operations
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/confirm', confirmUserController); 
router.delete('/delete', deleteUser); 

export default router;
