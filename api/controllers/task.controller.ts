import { Request, Response } from 'express';
import TaskModel from '../models/task.model';  // Import your Task model
import logger from '../utils/logger';
import { paginate } from '../utils/pagination'; 


export const addTask = async (req: Request, res: Response) => {
    try {
        const newTask = new TaskModel({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            priority: req.body.priority,
            project: req.body.projectId  // Assuming project ID is passed in request
        });
        const task = await newTask.save();
        res.status(201).json({ message: 'Task added', task });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
        res.json({ message: 'Task updated', task });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.taskId);
        res.json({ message: 'Task deleted' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};


export const listTasks = async (req: Request, res: Response) => {
    try {
        // Include priority in the query parameters for sorting
        const { sort = 'priority', order = 'asc' } = req.query;

        // Use the paginate utility function with priority sorting
        const { results, total, totalPages, currentPage } = await paginate(req, TaskModel);
        
        // Send the response with pagination and sorting details
        res.json({
            message: 'Tasks retrieved',
            tasks: results,
            total,
            totalPages,
            currentPage
        });
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        logger.error(errorMessage);
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
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};