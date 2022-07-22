import React from 'react'

import { Button } from '@mui/material'
import './item.css'

import { CartItemType } from '../../App'
type Props = {
    item: CartItemType;
    handleAddToCartItem: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCartItem}) => {
  return (
    <div className='shop__store-item'>
        <img src={item.image} alt={item.title} />
        <div className='shop__store-item_info'>
            <h3 className='p__cormorant'>{item.title}</h3>
            <p className='p__opensans'>{item.description}</p>
            <h3 className='p__cormorant'>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCartItem(item)}>Añadir al carrito</Button>
    </div>
  )
}

export default Item