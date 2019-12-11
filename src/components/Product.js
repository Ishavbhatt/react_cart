import React from "react";

export default function Product(props) {
  return (
    <div className="products">
      <h1>{props.title}</h1>
      <span>{props.price} $</span>
      <button className="addbutton" onClick={() => props.addtocart(props)}>
        Add to Cart
      </button>
    </div>
  );
}
