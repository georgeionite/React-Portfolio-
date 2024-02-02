import React from 'react';
import Project from './Projects'; // Make sure this points to the correct file
import projectsData from '../data/projects.json';

// Define the ProjectData interface
interface ProjectData {
  id: string;
  title: string;
  deployedLink?: string; // Optional because some projects might not have it
  githubLink: string;
  image: string;
}

// Cast the imported data to the correct type
const typedProjectsData: ProjectData[] = projectsData as ProjectData[];

const ProjectsGallery: React.FC = () => {
  return (
    <div>
      {typedProjectsData.map((project) => (
        // Use the correct interface for project and the unique id for key
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectsGallery;
