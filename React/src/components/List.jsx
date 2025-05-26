import React from 'react'
import Item from "./item";

const List = ({items, ondelete}) => {
  // Ensure items is always an array
  const safeItems = Array.isArray(items) ? items : [];
  
  return (
    <>
      {safeItems.map((i)=> (
        <Item key={i.id} item={i} />
      ))}
    </>
  )
}

export default List
