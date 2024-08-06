import { Request, Response } from 'express';
import {
  addTask,
  updateTask,
  deleteTask,
  listTasks,
  getTask
} from '../controllers/task.controller';
import TaskModel from '../models/task.model';

jest.mock('../models/task.model');

describe('Task Controller', () => {
  describe('addTask', () => {
    it('should add a new task successfully', async () => {
      const req = {
        body: { title: 'New Task', description: 'Task Description', status: 'To Do', priority: 'High', projectId: 'projectId' }
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      (TaskModel.prototype.save as jest.Mock).mockResolvedValue({
        _id: 'taskId',
        title: 'New Task',
        description: 'Task Description'
      });

      await addTask(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Task added',
        task: { _id: 'taskId', title: 'New Task', description: 'Task Description' }
      });
    });

    it('should handle errors when adding a new task', async () => {
      const req = {
        body: { title: 'New Task' }
      } as Partial<Request>;
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      (TaskModel.prototype.save as jest.Mock).mockRejectedValue(new Error('Failed to create task'));

      await addTask(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Failed to create project', error: 'Failed to create task' });
    });
  });

  // Add more test cases for updateTask, deleteTask, listTasks, and getTask similarly
});
