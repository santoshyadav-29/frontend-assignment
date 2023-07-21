
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API endpoint on component mount
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
    <h1 className='text-center bg-orange-500 p-4 m-5 mt-[10rem] rounded-md'>Products</h1>
    <div className='grid grid-cols-3  justify-center gap-2 w-[80%]  mx-auto'>
      {products.map(product => (
        <div key={product.id} className='flex flex-col items-center justify-center text-center p-1 bg-zinc-400 rounded-xl'>
          <img src={product.image} alt={product.title} className='w-[50%]' />
          <h3 className='w-[20ch]'>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Product;
