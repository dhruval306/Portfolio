import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Intro = () => {
  return (
    <div className='p-5 mt-10'>
      <div className="flex rounded-lg w-full intro-image bg-no-repeat bg-cover">
        <div className='flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 md:py-10 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10'>
          <div style={{ maxWidth: '100%' }}>
            <img
              alt='Dhruval Soni'
              data-nimg='1'
              decoding='async'
              loading='lazy'
              src='https://i.ibb.co/23xg22t/portfolio-img.png'
              className='w-24 h-24 sm:h-40 sm:w-40 object-cover border-4 border-white rounded-full shadow-md profile-image'
            />
          </div>
          <div className='flex md:flex-1 flex-col justify-center gap-4'>
            <div className='flex justify-between items-center gap-5 '>
              <div className='text-xl sm:text-4xl flex flex-col font-bold text-highlight'>
                Dhruval Soni
                <div className='text-sm font-thin flex justify-between items-center'>
                  #FullStackDeveloper
                </div>
              </div>
              <a className='hidden md:block' target='_blank' href='https://www.linkedin.com/in/dhruvalsoni/'>
                <button className='h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed bg-cardPrimary text-primary font-semibold text-xs py-2 px-4'>
                  <LinkedInIcon /> Follow me on LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
