import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { IUser } from '../models/user.model';

// Creating a JWKS client
const client = jwksClient({
    jwksUri: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.USER_POOL_ID}/.well-known/jwks.json`
  });
  
  function getKey(header: jwt.JwtHeader, callback: jwt.SigningKeyCallback) {
    if (!header.kid) {
      callback(new Error('Key ID (kid) not found in JWT header'), undefined);
      return;
    }
    
    client.getSigningKey(header.kid, (err, key) => {
      if (err) {
        callback(err, undefined);
        return;
      }
  
      if (!key) {
        callback(new Error('No key found'), undefined);
        return;
      }
  
      // Ensure that the key object has a method to get the public key
      const signingKey = key.getPublicKey();
      if (!signingKey) {
        callback(new Error('Unable to retrieve signing key'), undefined);
        return;
      }
  
      callback(null, signingKey);
    });
  }
  
  const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent as "Bearer <token>"
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided.' });
    }
  
    jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token.' });
      }
  
      req.user = decoded as IUser; // Assuming you validate or cast appropriately based on your user model
      next();
    });
  };
  
  export default verifyToken;