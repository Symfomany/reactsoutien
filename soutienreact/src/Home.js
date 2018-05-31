import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: "",
      visible: false
    };
    this.message = "J'aime le JS. Et vous?";
    this.clicker = this.clicker.bind(this);
    this.anotherClick = this.anotherClick.bind(this);
  }

  anotherClick() {
    this.setState({
      visible: true
    });
  }

  clicker(e) {
    this.message = "J'aime aussi le JEE";

    this.calcul();
    console.log(this.resultat);
  }

  calcul() {
    this.resultat = 1 + 1;
  }

  render() {
    return (
      <div>
        <button onClick={this.anotherClick}>Autre boutton</button>
        <a onClick={this.clicker}>Je clique !</a>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default Home;
