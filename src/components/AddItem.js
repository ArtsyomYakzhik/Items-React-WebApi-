import React from 'react'

const AddItem = ({addItem}) => {
    return <form method='POST'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
        <label htmlFor='price'>Price</label>
        <input type='number' min='0' name='price' />
        <label htmlFor='description'>description</label>
        <textarea rows='10' cols='45' name='description' />
        <button type='button' onClick={() => {addItem(getItem())}}>Create</button>     
        </form>
}

export default AddItem;

function getItem(){
    
    return {
        name: document.getElementsByName('name')[0].value,
        price: +document.getElementsByName('price')[0].value,
        text: document.getElementsByName('description')[1].value
    }
}