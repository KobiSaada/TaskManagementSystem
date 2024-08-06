import { useEffect, useState } from 'react';
import { getProjects } from '../utils/api';

interface Project {
    id: string;
    name: string;
    description: string;
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    async function fetchProjects() {
        const projects = await getProjects();
        setProjects(projects); // Directly setting the projects
    }

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}
