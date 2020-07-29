import React from 'react'
import Item from './Item'

const ItemsList = ({items, deleteItem}) => {
    return <div className='list'>
        {items.map(
            (value, index) =>{
                return <Item key={index} item={value} deleteItem={deleteItem} />
            }
        )}
    </div>
}

export default ItemsList;