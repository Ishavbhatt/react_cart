import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="heading" onClick={props.handleProductspage}>
        Cart
      </h1>
      <p className="cart" onClick={props.handleactivepage}>
        <img className="cartimage" src="images/shopping-cart.png" />
        {props.cart.length}
      </p>
    </div>
  );
}
