import { Request, Response } from 'express';
import ProjectModel from '../models/project.model';  // Import your Project model
import { IUser } from '../models/user.model';
import logger from '../utils/logger';
import { paginate } from '../utils/pagination'; 


export const createProject = async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: No user found' });
    }

    try {
        const newProject = new ProjectModel({
            name: req.body.name,
            description: req.body.description,
            createdBy: (req.user as IUser)._id 
        });
        const project = await newProject.save();
        res.status(201).json({ message: 'Project created successfully', project });
    } catch (error: unknown) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        res.status(500).json({ message: 'Failed to create project', error: errorMessage });
    }
};


export const getProject = async (req: Request, res: Response) => {
    try {
        const project = await ProjectModel.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project retrieved', project });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};


export const updateProject = async (req: Request, res: Response) => {
    try {
        const project = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: 'Project updated', project });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};
export const deleteProject = async (req: Request, res: Response) => {
    try {
        const project = await ProjectModel.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted', project });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        } else {
            res.status(500).json({ message: 'Failed to create project', error: 'Unexpected error' });
        }
    }
};



export const listProjects = async (req: Request, res: Response) => {
    try {
        // Use the paginate utility function to get paginated projects
        const { results, total, totalPages, currentPage } = await paginate(req, ProjectModel);
        
        // Send the response with pagination details
        res.json({
            message: 'Projects retrieved',
            projects: results,
            total,
            totalPages,
            currentPage
        });
    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Unexpected error';
        logger.error(errorMessage);
        res.status(500).json({ message: 'Failed to retrieve projects', error: errorMessage });
    }
};