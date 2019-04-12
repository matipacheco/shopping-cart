import React, { Component } from "react";

import { connect } from "react-redux";

class Shop extends Component {
  render() {
    debugger;
    return(
      <div>
        {
          this.props.storeItems.shoppingCartState.map(function (item) {
            return(
              <div>
                <h1>
                  { item.id }
                </h1>
                { item.name }
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  storeItems: state
});

export default connect(mapStateToProps)(Shop);