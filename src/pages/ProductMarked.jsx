import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
  
  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    if(count == 0) {

    } else {
    setCount(count-1)
    } 
  }

  console.log(productsFound);

  return (
    <div className='ProductMarked'>
      <p>Home <span className='point'></span> <strong>{productsFound?.title}</strong></p>
      <div className='container'>
        <div className='container-one'>

          <div>
            <img src={productsFound?.productImgs[0]} alt="" />
          </div>
          <div>
            <p>
              <strong>{productsFound?.title}</strong>
            </p>

            <div>
              <p>{productsFound?.description}</p>
            </div>

            <span>Price: $ {productsFound?.price}</span>
            <div className='HomeButton'>
              <button onClick={()=>increment()}>+</button>
              <div>{count}</div>
              <button onClick={()=>decrement()}>-</button>
            </div>
          </div>

          
        </div>
        <div className='container-two'>

          <p>RELATED PRODUCTS</p>
          <div>
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