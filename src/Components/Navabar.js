import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = () => {
  return (
    <>
      <nav className='bg-cardPrimary items-center hidden sm:flex fixed top-0 w-full z-10'>
        {/* Left side of the navigation bar with dots */}
        <div className='hidden md:flex items-center gap-1 p-2'>
          <FiberManualRecordIcon className='dot' />
          <FiberManualRecordIcon className='dot' />
        </div>

        {/* Right side of the navigation bar with social icons and a "Contact Me" button */}
        <div className='flex items-center justify-end w-full'>
          <a href='https://www.linkedin.com/in/dhruvalsoni/' target='_blank'><LinkedInIcon className='dot mx-1 cursor-pointer' /></a>
          <a href='https://github.com/dhruval306' target='_blank'><GitHubIcon className='dot mx-1 cursor-pointer' /></a>
          <a href='https://www.instagram.com/_dhruval_soni/' target='_blank'><InstagramIcon className='dot mx-1 cursor-pointer' /></a>
          <button
            className='h-max w-max rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed bg-btnHighlight text-highlight text-xs py-2 px-4 mx-4'>
            Contact Me
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
