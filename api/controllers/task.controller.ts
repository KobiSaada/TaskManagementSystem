import { Request, Response } from 'express';
import TaskModel from '../models/task.model';
import logger from '../utils/logger';
import { paginate } from '../utils/pagination';

export const addTask = async (req: Request, res: Response) => {
    try {
        const { title, description, status, priority, projectId } = req.body;

 
if (!projectId) {
    return res.status(400).json({ message: 'Project ID is required to create a task' });
}

        const newTask = new TaskModel({
            title,
            description,
            status,
            priority,
            project: projectId,
        });

        const task = await newTask.save();
        res.status(201).json({ message: 'Task added', task });
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        logger.error(`Error in addTask: ${errorMessage}`);
        res.status(500).json({ message: 'Failed to create task', error: errorMessage });
    }
};


export const updateTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task updated', task });
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        logger.error(`Error in updateTask: ${errorMessage}`);
        res.status(500).json({ message: 'Failed to update task', error: errorMessage });
    }
};


export const deleteTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params.taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        logger.error(`Error in deleteTask: ${errorMessage}`);
        res.status(500).json({ message: 'Failed to delete task', error: errorMessage });
    }
};

export const listTasks = async (req: Request, res: Response) => {
    try {
      const { results, total, totalPages, currentPage } = await paginate(req, TaskModel);
      res.status(200).json({
        message: 'Tasks retrieved',
        tasks: results,
        total,
        totalPages,
        currentPage,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      logger.error(`Error in listTasks: ${errorMessage}`);
      res.status(500).json({ message: 'Failed to retrieve tasks', error: errorMessage });
    }
  };
  
export const getTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findById(req.params.taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task retrieved', task });
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        logger.error(`Error in getTask: ${errorMessage}`);
        res.status(500).json({ message: 'Failed to retrieve task', error: errorMessage });
    }
};
