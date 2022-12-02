import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsThunk } from '../store/slice/products.slice';

const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state?.products);
  const [ filterCategory, setFilterCategory ] = useState("")
  
  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])

  console.log(products)

  let filter = products.filter(product => (
    product.category.name == filterCategory 
  ))
  
  let content = filter !== "" ? filter : products

  return (
    <div className='HomePrincipal'>
      <div className='filter'>
        <div className='filter-price'>
          <p><strong className='title'>Price</strong></p>
          <div>
            From <input type='text'/>
            To <input type='text'/>
            <button>Filter price</button>
          </div>
        </div>
        <div className='filter-category'>
          <strong className='title'>Category</strong>
          <div>
            <p onClick={e =>setFilterCategory(e.target.innerText)}>Kitchen</p>
            <p onClick={e =>setFilterCategory(e.target.innerText)}>Smart TV</p>
            <p onClick={e =>setFilterCategory(e.target.innerText)}>Smartphones</p>
            <p onClick={e =>setFilterCategory(e.target.innerText)}>Computers</p>
          </div>
        </div>
      </div>
      <div>
        <input type="text" placeholder=' What are you looking for?'/>
        <button>🔍</button>
      </div>
      <div className='Home'>
        {products?.map((product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <img src={product.productImgs?.[1]} style={{width: 100, height: 100}} alt="i" />
            <p>{product.title}</p>
            <div>
              <p><strong>Price:</strong></p>
              <p>$ {product.price}</p>
            </div>
          </Link>
        )))}
      </div>
    </div>
  );
};

export default Home;