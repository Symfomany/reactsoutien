import React, { Component } from "react";

class Formule extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changer = this.changer.bind(this);
  }

  changer(e) {
    console.log(e.target.value);
    console.log(this.message());
  }

  message() {
    return "Super Message";
  }

  render() {
    return (
      <div>
        <input onChange={this.changer} />
      </div>
    );
  }
}

export default Formule;
