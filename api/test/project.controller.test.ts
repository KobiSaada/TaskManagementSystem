import { Request, Response } from 'express';
import { createProject } from '../controllers/project.controller';
import ProjectModel from '../models/project.model';



jest.mock('../models/project.model');

describe('Project Controller', () => {
  describe('createProject', () => {
    it('should create a new project successfully', async () => {
      const req = {
        body: { name: 'Test Project', description: 'Test Description' },
        user: { _id: 'mockUserId' }
      } as Partial<Request>;

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      } as Partial<Response>;

      (ProjectModel.prototype.save as jest.Mock).mockResolvedValue({
        _id: 'mockProjectId',
        name: 'Test Project',
        description: 'Test Description',
        createdBy: 'mockUserId'
      });

      await createProject(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Project created successfully',
        project: {
          _id: 'mockProjectId',
          name: 'Test Project',
          description: 'Test Description',
          createdBy: 'mockUserId'
        }
      });
    });
  });
});
