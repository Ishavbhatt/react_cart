import React from "react";

export default function Product(props) {
  return (
    <div className="products">
      <h1 className="cartpage-productheading">{props.title}</h1>
      <p className="cartedprice">
        {props.price}
        <span> $</span>
      </p>
      <button className="addbutton" onClick={() => props.addtocart(props)}>
        Add to Cart
      </button>
    </div>
  );
}
