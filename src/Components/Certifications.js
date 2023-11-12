import React from 'react';
import CertiList from './APIs/CertiList';

const Certifications = () => {
  return (
    <div className='grid gap-8 p-5 m-5 md:p-0'>
      <div className='text-xl font-medium text-zinc-200'>
        Certifications
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl::grid-cols-3 gap-5'>
        {CertiList.map((val, index) => {
          return (
            <div key={index} className='flex items-center relative group overflow-hidden bg-cardPrimary p-3 shadow-2xl'>
              <div className='flex items-center gap-1 text-primary rounded-lg'>
                <div style={{ maxWidth: '100%' }}>
                  <img
                    src={val.image}
                    className='object-cover border-2 border-white rounded-full shadow-md w-16 h-16 sm:w-16 sm:h-16 md:w-24 md:h-24 p-1'
                    alt={val.category}
                  />
                </div>
              </div>
              <div className='flex flex-1 flex-col px-4 py-2'>
                <div className='flex md:text-lg text-md font-medium'>{val.category}</div>
                <div className='flex text-info text-xs'>{val.year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
