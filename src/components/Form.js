import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
      pin: "",
      radio: ""
    };
  }

  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    alert("Order Successfully");
    event.preventDefault();
  };

  render() {
    return (
      <div className="formdata">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="formpadding">
            <label>
              Name:
              <input
                className="inputform"
                name="name"
                type="text"
                placeholder="Your Name"
                value={this.state.name}
                onChange={this.handlechange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Email:
              <input
                className="inputform"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.handlechange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Phone No:
              <input
                className="inputform"
                name="phone"
                type="number"
                placeholder="Your Phone No."
                value={this.state.phone}
                onChange={this.handlechange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Address:
              <input
                className="inputform"
                name="address"
                type="text"
                placeholder="Enter Your Address"
                value={this.state.address}
                onChange={this.handlechange}
              />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Pin code:
              <input
                className="inputform"
                name="pin"
                type="number"
                placeholder="PinCode"
                value={this.state.pin}
                onChange={this.handlechange}
              ></input>
            </label>
          </div>
          <div className="formpadding">
            <label>
              Radio:
              <select
                value={this.state.radio}
                onChange={this.handlechange}
                className="inputform"
                name="radio"
              >
                <option value="home">Home</option>
                <option value="office">Office</option>
              </select>
            </label>
          </div>
          <input className="submitbutton" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
