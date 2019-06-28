import React, { Component } from "react";
import { productsUrl } from "../../utils/constants";

class TheStore extends Component {
  constructor() {
    super();
    this.state = {
      catalog: []
    }
  }

  componentDidMount() {
    fetch(productsUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let catalog = data.map((product) => {
          return(
            <div key={product.id}>
              <h1>{ product.Name }</h1>
            </div>
          )
        });

        this.setState({catalog: catalog});
      })
      .catch(function(error) {
        console.log('Error on while fetching:' + error.message);
      })
  }

  render() {
    return(
      <div>
        {
          this.state.catalog
        }
      </div>
    )
  }
}

export default TheStore;