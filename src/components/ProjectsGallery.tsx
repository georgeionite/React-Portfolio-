/// <reference types="json-loader" />

import React from 'react';
import Project from './Projects';
import projectsData from '../data/projects.json';

const ProjectsGallery: React.FC = () => {
  return (
    <div>
      {projectsData.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectsGallery;
