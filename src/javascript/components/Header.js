import React, { Component } from "react";

class Header extends Component{
  render() {
    return (
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg bg-light">
          <ul className="nav navbar-nav">
            <li>
              <i className="fas fa-shopping-cart"></i>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;