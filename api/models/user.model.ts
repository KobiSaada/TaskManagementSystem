import mongoose, { Document, Schema } from 'mongoose';

// Define the IUser interface extending Document
export interface IUser extends Document {
  username: string;
  email: string;
  role: 'admin' | 'user';  // Explicit role types
}

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'user'], required: true }
});

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);
export default User;
