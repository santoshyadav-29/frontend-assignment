import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/Card";
import Headers from "../Components/Header";
import Footer from "../Components/Footer";

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
      setProduct(response.data); 
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Show a loading message while the data is being fetched
  if (!product) {
    return <div className="h-[100vh] flex justify-center items-center text-3xl font-bold">Loading...</div>;
  }

  return (
    <div>
      <Headers />
      <h1 className="text-center bg-orange-500 p-4 m-5  rounded-md">
        Product Detail View
      </h1>
      <div className="w-[40%]  mx-auto p-5">
        <Card Detail={true} product={product} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
