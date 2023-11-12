import React from 'react';

const SkillCard = ({ val, index }) => {
  // Function to generate a random color for skill tags
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div key={index} className='flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg'>
      <div className='text-primary font-medium text-lg tracking-wider'>
        {val.category}
      </div>
      <div className='flex flex-wrap gap-2'>
        {val.skills.map((skill, index) => (
          <div
            key={index}
            className='rounded-md text-xs p-2 bg-body'
            style={{ border: `1px solid ${getRandomColor()}` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
