import React from 'react';

export const Author = ({  
  id,
  name,
}) => {
  return (
    <div key={id} className="shadow  max-w-md  rounded">
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};
