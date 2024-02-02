import React from 'react';

type ProjectProps = {
  title: string;
  deployedLink?: string;
  githubLink: string;
  image: string;
};

const Project: React.FC<ProjectProps> = ({ title, deployedLink, githubLink, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      {deployedLink && <a href={deployedLink}>Live Version</a>}
      <a href={githubLink}>GitHub Repo</a>
      <img src={image} alt={`Screenshot of ${title}`} />
    </div>
  );
}

export default Project;

