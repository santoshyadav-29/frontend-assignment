import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card"; // Assuming you have a Card component
import Headers from "../Components/Header";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from the API on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Assuming the API response is an array of product objects
      setFilteredProducts(response.data); // Set initial filtered products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter products based on the search term
 
  return (
    <div>
       <Headers />
      
      <h1 className="text-center bg-orange-500 p-4 m-5 mt-[10rem] rounded-md">
        Products
      </h1>
      <div className="searchBar text-center ">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value.toLocaleLowerCase());
          }
          }
          className="border border-gray-300 rounded-md px-2 py-1 w-[20rem]"
        />
        Search
      </div>

      <div className="grid grid-cols-3  justify-center gap-2 w-[80%]  mx-auto">
        {filteredProducts.filter((item) => {
                return searchTerm.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchTerm);
              })
              .map((product) => (
          <Card product={product} />
        ))}

      </div>
    </div>
  );
};

export default ProductPage;
