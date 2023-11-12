import React from 'react';
import SkillList from './APIs/SkillList';
import Project from './APIs/ProjectList';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SkillCard from './Cards/SkillCard';

const Skills = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  md:p-0'>
      {/* Left Column: Skill List */}
      <div className='col-span-2 p-6 md:col-span-2 lg:col-span-3'>
        <div className='text-xl font-medium mt-2 text-zinc-200 mb-5'>What I Know</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {/* Mapping through SkillList and rendering SkillCard for each item */}
          {SkillList.map((val, index) => (
            <SkillCard key={index} val={val} index={index} />
          ))}
        </div>
      </div>

      {/* Right Column: More Projects */}
      <div className='grid bg-cardPrimary gap-6 p-6 shadow-lg'>
        <div className='text-xl font-medium mt-2 text-zinc-200'>More Projects</div>
        <div className='grid grid-cols-1 gap-4 rounded-lg'>
          {Project.slice(4).map((val, index) => (
            <a
              key={index}
              href={val.GithubCode}
              target='_blank'
              className='hover:border border-primary border-opacity-0 transition duration-300'
            >
              <div className='flex items-center gap-1 text-primary rounded-lg'>
                <div className='flex flex-1 flex-col px-4 py-2'>
                  <div className='flex text-sm font-medium'>{val.Name}</div>
                  <div className='flex text-info text-xs'>{val.Description}</div>
                </div>
                <KeyboardArrowRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;