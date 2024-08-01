import mongoose, { Document, Schema } from 'mongoose';

// Define the IUser interface extending Document
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;  // Explicitly include _id here
  username: string;
  email: string;
  role: 'admin' | 'user';  // Add role field with predefined values
  // Add other fields as necessary
}

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'user'], required: true } // Add role field
});

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);
export default User;
