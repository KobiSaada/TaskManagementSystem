import axios from 'axios';

const API_URL = 'http://localhost:3002/api';

// Define interfaces for the expected data structures
interface Project {
    id: string;
    name: string;
    description: string;
}

interface ProjectData {
    name: string;
    description: string;
}

// Fetch projects and directly return the data array
export async function getProjects(): Promise<Project[]> {
    const response = await axios.get<Project[]>(`${API_URL}/projects`);
    return response.data; // Returning just the data part
}
// Create a new project with proper data type for request body
export async function createProject(data: ProjectData): Promise<Project> {
    const response = await axios.post<Project>(`${API_URL}/projects`, data);
    return response.data;
}

// Add more functions here with proper type annotations
