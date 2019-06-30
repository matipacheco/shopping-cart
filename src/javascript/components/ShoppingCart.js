import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    return(
      <div className="btn-info">
        <i className="fas fa-shopping-cart"></i>
        <span style={{marginLeft: "10px"}}>
          { this.props.storeItems.shoppingCart.length }
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  storeItems: state
});

export default connect(mapStateToProps)(ShoppingCart);