import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    return(
      this.props.storeItems.shoppingCart.length
    )
  }
}

const mapStateToProps = state => ({
  storeItems: state
});

export default connect(mapStateToProps)(ShoppingCart);