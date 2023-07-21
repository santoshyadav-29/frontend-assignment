import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Headers from "../Components/Header";

const ProductDetail = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const id = window.location.pathname.split("/")[2];
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data); // Assuming the API response is an object representing the product details
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Show a loading message while the data is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Headers />
      <h1 className="text-center bg-orange-500 p-4 m-5 mt-[10rem] rounded-md">
        Product Detail View
      </h1>
      <div className="w-[40%]  mx-auto p-5">
        <Card product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
