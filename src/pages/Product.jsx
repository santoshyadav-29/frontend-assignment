import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";

const Product = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API endpoint on component mount
    axios
      .get(props.api)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
     
      <h1 className="text-center bg-orange-500 p-4 m-5 mt-[10rem] rounded-md">
        {props.text || "Products"}
      </h1>
      <div className="grid grid-cols-3  justify-center gap-2 w-[80%]  mx-auto">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
