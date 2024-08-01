import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description: string;
  createdBy: mongoose.Types.ObjectId;  // Reference to a user's ObjectId
}

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' }  // Link to User model by name
});

export const ProjectModel = mongoose.model<IProject>('Project', projectSchema);
export default ProjectModel;
