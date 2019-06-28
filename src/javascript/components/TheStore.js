import React, { Component } from "react";

import { connect } from "react-redux";

class TheStore extends Component {
  render() {
    return(
      <div>
        {
          this.props.storeItems.catalog.map(function (item) {
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

export default connect(mapStateToProps)(TheStore);