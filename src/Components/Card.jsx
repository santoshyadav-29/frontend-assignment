import React from "react";

import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  return (
    <div
      key={props.product.id}
      className="flex flex-col items-center gap-2 justify-center text-center p-1 bg-white rounded-xl"
    >
      <img
        src={props.product.image}
        alt={props.product.title}
        className="w-[50%] rounded-lg"
      />
      <h3 className="w-[22ch]">{props.product.title}</h3>
      {props.Detail ? (
        <p className="p-2 max-w-lg font-thin">
          {" "}
          <b>Description: </b>
          {props.product.description}
        </p>
      ) : (
        ""
      )}
      {props.Detail ? (
        ""
      ) : (
        <p>
          <b>Category:</b> {props.product.category}
        </p>
      )}
      <p>Price: ${props.product.price}</p>
      <button
        onClick={() => {
          navigate(`/products/${props.product.id}`);
        }}
        className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600"
      >
        {props.buttonText || "View Details"}
      </button>
    </div>
  );
};

export default Card;
