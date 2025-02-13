import React from 'react'

const item = ({item}) => {
  return (
    <div>
      <ol>
        <li>{item.name}</li>
        <li>{item.price}</li>
      </ol>
    </div>
  );
};

export default item
