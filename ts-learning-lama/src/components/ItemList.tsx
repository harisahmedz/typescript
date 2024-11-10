import React from 'react'
import Item from './Item'

const ItemList = () => {
  return (
    <Item id={1} title={'title'} extra={[{id:1, username:"john"}]}/>
  )
}

export default ItemList