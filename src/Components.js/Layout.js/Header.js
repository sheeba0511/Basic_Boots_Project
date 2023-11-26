import React, { Component } from "react";
import Nav from "../Nav";

export default class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <Nav />
          </div>
        </header>
      </>
    );
  }
}
