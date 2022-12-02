import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slice/purchases.slice';

const Purchases = () => {

  const dispatch = useDispatch();

  const purchases = useSelector(state=>state.purchases);

  useEffect(()=>{
    dispatch(getPurchasesThunk());
  }, [])

  console.log(purchases)

  return (
    <div className='purchases'>
      <h4><strong>MY PURCHASES</strong></h4>
      {
        purchases.map(purchase =>(
          purchase.cart.products.map(element=>(
            <li>
              <p>{element.updatedAt}</p>
              <div>
                <p><strong>{element.title}</strong></p>
                <p>{element.productsInCart.quantity}</p>
                <div>
                  <p className='model'>{element.brand}</p>
                  <p>$ {element.price}</p>
                </div>
              </div>
            </li>
            ))
        ))
      }
    </div>
  );
};

export default Purchases;