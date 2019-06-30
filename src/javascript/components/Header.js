import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";

export default class Header extends Component{
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-light fixed-top" style={{justifyContent: "flex-end"}}>
          <ShoppingCart/>
        </nav>
      </div>
    );
  }
}