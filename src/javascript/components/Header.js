import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";

class Header extends Component{
  render() {
    debugger
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <ul className="nav navbar-nav">
            <li>
              <i className="fas fa-shopping-cart">
                <ShoppingCart/>
              </i>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;