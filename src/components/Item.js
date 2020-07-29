import React from 'react'

const style=[
    {
        display:'none'
    },
    {
        display:'block'
    }
] 
const Item = ({item, deleteItem}) =>{
    const [visibility, setVisibility] = React.useState(false);
    return <div className='item' onClick={()=>{setVisibility(!visibility);}}>
        <strong>Name:{item.name}</strong>
        <h4>Price:{item.price}</h4>
        <p style={style[+visibility]}>Description:{item.text}</p>
        <button onClick={()=> deleteItem(item.id)} >Delete</button>
    </div>
}
export default Item;