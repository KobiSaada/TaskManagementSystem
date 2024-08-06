import { Request, Response } from 'express';
import { signUp, signIn, confirmUser ,deleteUserInCognito } from '../services/auth.service';
// import logger from '../utils/logger';
import User from '../models/user.model';  

export const registerUser = async (req: Request, res: Response) => {
    try {
        console.log("registerUser called with:", req.body);
        const { email, password, username, role } = req.body;
        const response = await signUp(email, password, username, role);
        console.log("signUp response:", response);
        res.status(200).json({ message: 'User registered successfully', data: response });
    } catch (error) {
        console.error("Error in registerUser:", error);
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
};


export const loginUser = async (req: Request, res: Response) => {
    try {
        // Destructure email and password from the request body
        const { email, password } = req.body;
  
        

        // Call the signIn service function
        const response = await signIn(email, password);

        // If signIn is successful, send a success response
        res.status(200).json({ message: 'User logged in successfully', data: response });
    } catch (error) {
        // Handle errors, assuming they can be cast to Error objects
        console.error("Error in loginUser:", error); // Log the error for debugging
        const errorMessage = (error as Error).message || 'An error occurred during login';
        res.status(400).json({ message: errorMessage });
    }
};


export const confirmUserController = async (req: Request, res: Response) => {
    try {
        const { username, verificationCode } = req.body;

        // Call the confirmUser service function
        const response = await confirmUser(username, verificationCode);

        // Send success response
        res.status(200).json({ message: response });
    } catch (error) {
        console.error("Error in confirmUserController:", error); // Log the error for debugging
        const errorMessage = (error as Error).message || 'An error occurred during confirmation';
        res.status(400).json({ message: errorMessage });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;

        // Delete user from Cognito using the email address
        await deleteUserInCognito(email);

        // Delete user from MongoDB using the email address
        const result = await User.findOneAndDelete({ email });
        if (result) {
            console.log('User deleted from MongoDB');
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            console.log('User not found in MongoDB');
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error("Error in deleteUser:", error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
        res.status(500).json({ message: errorMessage });
    }
};