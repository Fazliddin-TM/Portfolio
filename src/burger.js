import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./burger.css";
class Burger extends Component {
  state = {
    show: "false",
  };
  slayd = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.slayd} className="btn__injigi">
          <span className={this.state.show ? "line minasa" : "line"}></span>
          <span className={this.state.show ? "line chopish" : "line"}></span>
          <span className={this.state.show ? "line binasa" : "line"}></span>
        </button>
        <div className={this.state.show ? "navbarr ochil" : "navbarr"}>
          <ul className="navbar d__flex ">
            <a href="#Home">
              <li className="nav__items mx__15">Home</li>
            </a>
            <a href="#About">
              <li className="nav__items mx__15">About</li>
            </a>
            <a href="#Service">
              <li className="nav__items mx__15">Skills</li>
            </a>
            <a href="#Portfolio">
              <li className="nav__items mx__15">Portfolio</li>
            </a>
            <a href="#Contact">
              <li className="nav__items mx__15">Contact</li>
            </a>
          </ul>
        </div>
      </>
    );
  }
}

export default Burger;
