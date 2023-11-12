import React from 'react';
import Project from "./APIs/ProjectList.js";
import ProjectCard from './Cards/ProjectCard.js';

const Projects = () => {
  return (
    <div className='grid gap-8 p-5 mt-5 md:p-0"'>
      {/* Container for displaying a list of projects */}
      <div className='text-xl font-medium text-zinc-200'>
        Projects
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-3 gap-5'>
        {
          // Map through the first 4 projects from the 'Project' array and create ProjectCard components
          Project.slice(0, 4).map((val, index) => {
            return <ProjectCard val={val} index={index} key={index}/>
          })
        }
      </div>
    </div>
  );
}

export default Projects;
