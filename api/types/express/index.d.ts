// Location: api/types/express.d.ts
import { IUser } from '../../models/user.model';  // Adjust the path as necessary
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
