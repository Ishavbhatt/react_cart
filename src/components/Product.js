import React from "react";

export default function Product(props) {
  return (
    <div className="products">
      <h1>{props.title}</h1>
      <p>{props.price} $</p>
      <button className="addbutton" onClick={() => props.addtocart(props)}>
        Add to Cart
      </button>
    </div>
  );
}
