import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Headers from "../Components/Header";
import Footer from "../Components/Footer";

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from the API on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");

      setFilteredProducts(response.data); // Set initial filtered products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Headers />

      <h1 className="text-center bg-orange-500 m-5 p-4 rounded-md">Products</h1>
      <div className="searchBar text-center  m-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value.toLocaleLowerCase());
          }}
          className=" rounded-md px-2 py-1 w-[20rem]"
        />
        <button className="bg-orange-500 text-white mx-2 px-5 py-2 rounded-md">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1  justify-center gap-2 w-[80%]  mx-auto md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts // Filter products based on the search term
          .filter((item) => {
            return searchTerm.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(searchTerm);
          })
          .map((product) => (
            <Card product={product} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
