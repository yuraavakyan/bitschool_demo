import React from "react";
import { Component } from "react";
import "./styles.css";
class Comp extends Component {
  constructor() {
    super();
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }
  state = {
    count: 0,
  };
  handleClickPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClickMinus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleClickReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <button onClick={this.handleClickMinus} className="button">
            -
          </button>
          <p className="result">{this.state.count}</p>
          <button onClick={this.handleClickPlus} className="button">
            +
          </button>
        </div>
        <button className="button" onClick={this.handleClickReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Comp;
