import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProjectCard = ({ val, index }) => {
  return (
    <div className='relative group overflow-hidden' key={index}>
      <div className='flex flex-col gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis transition-all duration-300 ease-in-out'>
        <img loading='lazy' decoding='async' data-mimg='1' src={val.ImageLink} className='aspect-video object-cover opacity-100' width={700} height={700}></img>
        <div className='flex flex-col px-4 py-2 h-24'>
          <div className='flex font-bold pb-1'>
            {val.Name}
          </div>
          <div className='flex text-info text-xs'>
            {val.Technology}
          </div>
        </div>
        <div className={`flex flex-col items-center justify-center absolute inset-0 bg-opacity-0 backdrop-blur-md transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 hover:animate-bounce_once p-3`}>
          <div className='text-sm text-white mb-4 overflow-y-auto max-h-40'>{val.Description}</div>
          <div className='flex space-x-4'>
            <button className='h-max w-max rounded-md outline-0 active:scale-95 active:shadow-inner bg-btnHighlight text-highlight text-sm py-2 px-4 mx-2 hover:bg-opacity-90 transition duration-300'>
              <a href={val.GithubCode} target='_blank' ><GitHubIcon /></a>
            </button>
            {val.WebsiteLink ? (
              <button className='h-max w-max rounded-md outline-0 active:scale-95 active:shadow-inner bg-btnHighlight text-highlight text-sm py-2 px-4 mx-2 hover:bg-opacity-90 transition duration-300'>
                <a href={val.WebsiteLink} target='_blank' ><VisibilityIcon /></a>
              </button>
            ) : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
