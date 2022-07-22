import React from 'react'
import CartItem from '../CartItem/CartItem';

import './cart.css'

import { CartItemType } from '../../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart, deleteFromCart}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  
  return (
    <>
      <aside className='shop__Cart'>
        <h2>Tu carrito de compras</h2>
        {cartItems.length === 0 ? <p>No hay artículos en el carrito</p>: null}
        {cartItems.map(item => (
          <CartItem 
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            deleteFromCart={deleteFromCart}
          />
        ))}
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      </aside>
    </>
  )
}

export default Cart