import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    return(
      "holi"
    )
  }
}

const mapStateToProps = state => ({
  storeItems: state
});

export default connect(mapStateToProps)(ShoppingCart);