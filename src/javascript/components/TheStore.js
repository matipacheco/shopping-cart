import React, { Component } from "react";
import { productsUrl } from "../../utils/constants";
import ShopItem from "./ShopItem";

export default class TheStore extends Component {
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
            <ShopItem product={product}/>
          )
        });

        this.setState({catalog: catalog});
      })
      .catch(function(error) {
        console.log("Error on while fetching products: " + error.message);
      })
  }

  render() {
    return(
      <div className="container container-s">
        {
          this.state.catalog
        }
      </div>
    )
  }
}