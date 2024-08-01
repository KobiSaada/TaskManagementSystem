import mongoose, { Schema, Document } from 'mongoose';
import { TaskStatus, TaskPriority } from '../Enums/enum_task';

interface ITask extends Document {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  project: mongoose.Types.ObjectId;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.TODO,
  },
  priority: {
    type: String,
    enum: Object.values(TaskPriority),
    default: TaskPriority.MEDIUM,
  },
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
});

const TaskModel = mongoose.model<ITask>('Task', taskSchema);
export default TaskModel;
