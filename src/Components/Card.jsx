import React from "react";
import ProductDetail from "../pages/ProductDetail";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      key={props.product.id}
      className="flex flex-col items-center justify-center text-center p-1 bg-white rounded-xl"
    >
      <img
        src={props.product.image}
        alt={props.product.title}
        className="w-[50%] rounded-lg"
      />
      <h3 className="w-[20ch]">{props.product.title}</h3>
      <p>Price: ${props.product.price}</p>
      <button
        onClick={() => {
          navigate(`/products/${props.product.id}`);
        }}
        className="bg-orange-500 text-white px-5 py-2 rounded-md"
      >
        {props.buttonText || "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
