
import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Fetch search results from the API endpoint
    axios.get(`https://fakestoreapi.com/products?title=${searchTerm}`)
      .then(response => setSearchResults(response.data))
      .catch(error => console.error(error));
  };
  const filteredProducts = searchResults.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
 

  return (
    <div className='min-h-[100vh] text-center mt-[4rem]'>
      <h1 className='text-center bg-orange-500 p-4 m-5 rounded-md'
    >Search Page</h1>
      <input className='border-2 border-gray-400 rounded-md p-1 m-2'
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
      className='bg-orange-500 text-white px-5 py-2 rounded-md'
       onClick={handleSearch}>Search</button>

      {filteredProducts.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
