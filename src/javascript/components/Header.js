import React, { Component } from "react";

class Header extends Component{
  render() {
    return (
      <div className="fixed-top flex-lg-row-reverse">
        <i className="fas fa-shopping-cart"></i>
      </div>
    );
  }
}

export default Header;