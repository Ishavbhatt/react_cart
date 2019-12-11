import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import Product from "./components/Product";
import Header from "./components/Header";
import Form from "./components/Form";

import "./styles/main.css";

function Products(props) {
  console.log(props);
  return (
    <div>
      {data.products.map(product => (
        <Product {...product} addtocart={props.addtocart} />
      ))}
    </div>
  );
}
function Total(props) {
  var total = props.cart.map(e => e.price).reduce((acc, price) => acc + price);
  return (
    <div className="card">
      <p>Total Amount</p>
      <p>{total}</p>
    </div>
  );
}

function Cart(props) {
  return (
    <div>
      {props.cart.map(item => (
        <div className="products">
          <h1>{item.title}</h1>
          <p>{item.price}</p>
        </div>
      ))}
      <hr></hr>
      <div className="totalamount">
        <Total cart={props.cart} />
      </div>
      <button className="checkoutbutton" onClick={props.handleCheckout}>
        Check out
      </button>
    </div>
  );
}

function Checkout() {
  return (
    <div>
      <Form />
    </div>
  );
}
function Handleall(props) {
  switch (props.view) {
    case "products":
      return <Products addtocart={props.addtocart} />;
      break;
    case "cart":
      return <Cart cart={props.cart} handleCheckout={props.handleCheckout} />;
      break;
    case "checkout":
      return <Checkout />;
    default:
      return <Products addtocart={props.addtocart} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      active: "products"
    };
  }

  handleProductspage = () => {
    this.setState({ active: "products" });
    return <Products addtocart={this.handleaddtocart} />;
  };

  handleaddtocart = item =>
    this.setState({ cart: this.state.cart.concat(item) });

  handleCheckout = () => {
    this.setState({ active: "checkout" });
    return <Checkout />;
  };

  handleactivepage = () => {
    this.setState({ active: "cart" });
    return <Cart cart={this.state.cart} />;
  };

  render() {
    return (
      <>
        <Header
          cart={this.state.cart}
          handleactivepage={this.handleactivepage}
          handleProductspage={this.handleProductspage}
        />
        <Handleall
          view={this.state.active}
          addtocart={this.handleaddtocart}
          cart={this.state.cart}
          handleCheckout={this.handleCheckout}
        />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
