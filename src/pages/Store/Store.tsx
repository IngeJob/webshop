import { useState } from 'react';
import { useQuery } from 'react-query';
import { Item } from '../../components';
import { Cart } from '../../components';
import { useLocalStorage } from '../../Hooks/useLocalStorage'

import { Badge, Drawer, Grid, LinearProgress, IconButton } from '@mui/material'
import { FaShoppingCart } from "react-icons/fa";

import './store.css';
import { CartItemType } from '../../App';

const getProducts = async ():Promise<CartItemType[]> =>
  await(await fetch('https://fakestoreapi.com/products')).json();

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [cartItems, setCartItems] = useLocalStorage('shopping-cart',[] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prevItems => {
      //si ya esta agregado al carrito
      const isItemInCart = prevItems.find(item => item.id === clickedItem.id) 
      if(isItemInCart){
        return prevItems.map(item => ( 
          item.id === clickedItem.id 
          ?{ ...item, amount: item.amount + 1}
          : item
        ))
      }
      //Primera vez que se agrega
      return [...prevItems, { ...clickedItem, amount: 1}]
    })
  };

  const handleRemoveToCart = (id: number) => {
    setCartItems(prevItems =>(
      prevItems.reduce((ack, item)=>{
        if(item.id === id){
          if(item.amount === 1) return ack;
          return [ ...ack, { ...item, amount: item.amount - 1}];
        } else {
          return [ ...ack, item]
        }
      }, [] as CartItemType[])
    ))
  };

  const handleDeleteToCart = (id: number) => {
    setCartItems( prevItems =>{
      return prevItems.filter(item => item.id !== id)
    })
  }

  if(isLoading) return <LinearProgress />;
  if (error) return <div>Ocurrió un error</div>;

  return (
    <section className='shop__store section__padding' id='store'>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveToCart}
          deleteFromCart={handleDeleteToCart}
        />
      </Drawer>
      <IconButton className='shop__store-icon' onClick={() => setCartOpen(true) }>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <FaShoppingCart />
        </Badge>
      </IconButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Item item={item} handleAddToCartItem={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Store