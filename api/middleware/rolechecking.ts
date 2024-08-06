import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/user.model'; // adjust the path as necessary

// Augment the Express types to include 'user' with the 'IUser' interface
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

const checkRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (userRole !== role) {
      return res.status(403).json({ message: 'Forbidden: You do not have the required role to access this resource.' });
    }

    next();
  };
};

export default checkRole;
