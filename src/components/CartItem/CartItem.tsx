import React from 'react'
import { Button } from '@mui/material'

import './cartItem.css'

import { CartItemType } from '../../App'

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart, deleteFromCart}) => {
  return (
    <div className='shop__CartItem'>
      <div className='shop__CartItem-container'>
        <h3 className='p__cormorant'>{item.title}</h3>

        <div className='shop__CartItem-information p__opensans'>
          <p>Precio: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>

        <div className='shop__CartItem-buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >
          -  
          </Button>  
          <p style={{color: 'var(--color-letter)'}}>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
          + 
          </Button> 
        </div>
        <div className='shop__CartItem-deleteButton'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            color='error'
            onClick={() => deleteFromCart(item.id)}
          >
          Eliminar 
          </Button>
        </div>  
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  )
}

export default CartItem