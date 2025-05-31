import React from 'react'
import Item from "./item";

const List = ({items, ondelete}) => {
  // Ensure items is always an array
  const safeItems = Array.isArray(items) ? items : [];
  
  return (
    <div>
      {safeItems.map((i)=> (
        <Item key={i.id} item={i} ondelete={ondelete} />
      ))}
    </div>
  )
}

export default List
