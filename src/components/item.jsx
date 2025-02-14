import React from 'react'
import Boton from './Boton';

const item = ({item, ondelete}) => {
  return (
    <div>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>
          <Boton click = {()=>ondelete(item.id)} name={"X"}/>
        </li>
      </ul>
    </div>
  );
};

export default item
