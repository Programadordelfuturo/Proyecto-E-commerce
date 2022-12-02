import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCartThunk } from '../store/slice/cart.slice';
import { getProductsThunk } from '../store/slice/products.slice';


const ProductMarked = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [ count, setCount ] = useState(0)

  useEffect(()=>{
    dispatch(getProductsThunk())
  },[])

  const productsList = useSelector(state=> state.products)
  
  const productsFound = productsList.find(product => product.id === Number(id))
  const relatedProducts = productsList.filter(product => 
    product.category.id === productsFound?.category.id
  )

  const [ quantity, setQuantity ] = useState("");

  const addCart = () => {
    const add = {
      id: productsFound?.id,
      quantity,
    }
    dispatch(createCartThunk(add))
  }

  return (
    <div className='ProductMarked'>
      <p>Home 
        <span className='point'></span>
        <strong>{productsFound?.title}</strong>
      </p>
      <div className='container'>
        <div className='container-one'>

          <div className='one'>
            <img src={productsFound?.productImgs[0]} alt="" />
          </div>
          <div className='two'>
            <p>
              <strong>{productsFound?.title}</strong>
            </p>

            <div>
              <p>{productsFound?.description}</p>
            </div>

            <span>Price: $ {productsFound?.price}</span>
            <div className='HomeButton'>
              <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder=' Quantity'/>
              <button onClick={addCart}>Add to cart</button>
            </div>
          </div>

          
        </div>
        <div className='container-two'>
          <p>RELATED PRODUCTS</p>
          <div className='container-data-two'>
            {relatedProducts.map(product => (
              <li key={product.id}>
                <img src={product.productImgs[0]} alt="i" />
                <div>
                  <Link to={`/product/${product.id}`}><strong>{product.title}</strong></Link>
                  <p>Price: {product.price}</p>
                </div>
              </li>
            ))}
          </div>          
        </div>
      </div>
    </div>
  );
};

export default ProductMarked;