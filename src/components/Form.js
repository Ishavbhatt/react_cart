import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handlechange = event => {
    console.log(event);
    this.setState({ name: event.target.name });
  };

  handleSubmit = event => {
    alert("A name was submitted: " + this.state.name);
  };

  render() {
    return (
      <div className="formdata">
        <form className="form">
          <div className="formpadding">
            <label>
              Name:
              <input
                className="inputform"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handlechange}
              />
            </label>
          </div>
          {/* <div className="formpadding">
            <label>
              Email:
              <input className="inputform" type="text" />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Phone No:
              <input className="inputform" type="phone" />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Address:
              <input className="inputform" type="text" />
            </label>
          </div>
          <div className="formpadding">
            <label>
              Pin code:
              <input className="inputform" type="number"></input>
            </label>
          </div> */}
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}
