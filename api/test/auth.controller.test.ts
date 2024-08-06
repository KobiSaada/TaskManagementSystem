import { Request, Response } from 'express';
import { registerUser, loginUser } from '../controllers/userAuth.controller';
import { signUp, signIn } from '../services/auth.service';

jest.mock('../services/auth.service');

describe('Auth Controller', () => {
  describe('registerUser', () => {
    it('should register a new user successfully', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'password123', username: 'testuser', role: 'user' }
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      (signUp as jest.Mock).mockResolvedValue('User created with email: test@example.com');

      await registerUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'User registered successfully',
        data: 'User created with email: test@example.com'
      });
    });

    it('should handle registration errors', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'password123' }
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      const error = new Error('Registration failed');
      (signUp as jest.Mock).mockRejectedValue(error);

      await registerUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
  });

  describe('loginUser', () => {
    it('should log in an existing user successfully', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'password123' }
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      (signIn as jest.Mock).mockResolvedValue('Access Token: someAccessToken');

      await loginUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'User logged in successfully',
        data: 'Access Token: someAccessToken'
      });
    });

    it('should handle login errors', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'wrongpassword' }
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      const error = new Error('Login failed');
      (signIn as jest.Mock).mockRejectedValue(error);

      await loginUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: error.message });
    });
  });
});
