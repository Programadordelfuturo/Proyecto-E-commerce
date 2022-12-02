import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartThunk, getCartThunk } from '../store/slice/cart.slice';

const Car = () => {

  const a = document.querySelector('#sidebar');

  const sidebar = () => {
    a.classList.toggle('toggle')
  }

  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)

  useEffect(()=>{
    dispatch(getCartThunk())
  }, [])

  const [ totalPrice, setTotalPrice ] = useState(0)

  useEffect(()=>{
    let total=0;
    cart.forEach(product => 
      total+=product.price*product.productsInCart.quantity)
    setTotalPrice(total)
  }, [cart])


  return (
    <div className='toggle-btn' onClick={()=>{sidebar()}}>
      <div>
        <span>Car</span>
      </div>
      <div id='sidebar' className='toggle'>
        {cart.map(product=>(
          <div>
            <div>
              <p>{product.title}</p>
              <p>$ {product.price}</p>
            </div>
            <div>
              {product.productsInCart.quantity}
            </div>
            <button onClick={() => {deleteCartThunk(product.id); getCartThunk()}}>Delete</button>
          </div>
        ))}
        <p><strong>Total</strong> {totalPrice}</p>
        <button>BUY</button>
      </div>
    </div>     
  );
};

export default Car;

