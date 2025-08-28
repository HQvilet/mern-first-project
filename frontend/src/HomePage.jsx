import React,{useEffect} from 'react'
import { useProductStore } from './store/product';

import ProductCard from './components/Card';
import './style/HomePage.css'

const ProductContainer = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);



  return (
    <div className='products-container'>
      <h1 style={{
        textAlign : 'center',
        color : 'antiquewhite'
      }}>
        Products
      </h1>
      <div className='products-list'>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
};

const HomePage = () => {
  return (
    <ProductContainer />
  )
}

export default HomePage; 