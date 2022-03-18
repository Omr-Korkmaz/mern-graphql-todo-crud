import React from 'react'
import './Item.css';

const Item = ({text, remove, update})=> {
    return (
        <article>
        <div className='todo'>
            <div className='todo__note'>{text}</div>
            <div className='icons'>
                <i className='' onClick={update}>edit</i>
                <i className='todo__button--remove' onClick={remove}>XXX</i>
            </div>
        </div>
        </article>
    )
}

export default Item;