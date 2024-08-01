// UserController.ts or similar file
import { Request, Response } from 'express';
import { signUp, signIn } from '../services/auth.service';
import logger from '../utils/logger';

logger.info('This is an informational message');
logger.error('This is an error message');

export const registerUser = async (req: Request, res: Response) => {
    try {
        const response = await signUp(req.body.email, req.body.password);
        res.json({ message: 'User registered successfully', data: response });
    } catch (error) {
        // Asserting error as an instance of Error
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const response = await signIn(req.body.email, req.body.password);
        res.json({ message: 'User logged in successfully', data: response });
    } catch (error) {
        // Asserting error as an instance of Error
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
};
