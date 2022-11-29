import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsThunk } from '../store/slice/products.slice';

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state?.products) 
  
  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])

  console.log(products)

  return (
    <div className='Home'>
      {products?.map((product => (
        <Link to={`/product/${product.id}`}>
          <img src={product.productImgs?.[1]} style={{width: 100, height: 100}} alt="i" />
          <p>{product.title}</p>
          <div>
            <p><strong>Price:</strong></p>
            <p>{product.price}</p>
          </div>
        </Link>
      )))}
    </div>
  );
};

export default Home;