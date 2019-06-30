import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ShoppingCart extends Component {
  render() {
    return(
      <Router>
        <Link to="/purchase_details" className="btn-info" style={{padding: "2px"}}>
          <i className="fas fa-shopping-cart"></i>
          <span style={{marginLeft: "10px"}}>
            { this.props.storeItems.shoppingCart.length }
          </span>
        </Link>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  storeItems: state
});

export default connect(mapStateToProps)(ShoppingCart);