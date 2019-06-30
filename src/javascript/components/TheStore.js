import React, { Component } from "react";
import { productsUrl } from "../../utils/constants";
import Product from "./Product";
import PurchaseDetail from "./PurchaseDetail";

export default class TheStore extends Component {
  constructor() {
    super();
    this.state = {
      catalog: [],
      showShoppingCart: false
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
            <Product key={ product.id } product={product}/>
          )
        });

        this.setState(
          {
            catalog: catalog,
            showShoppingCart: this.toggleShowShoppingCart()
          }
        );
      })
      .catch(function(error) {
        console.log("Error on while fetching products: " + error.message);
      })
  }

  toggleShowShoppingCart = () => {
    this.setState({ showShoppingCart: !this.state.showShoppingCart })
  };

  render() {
    return(
      <div className="container container-s">
        {
          !this.state.showShoppingCart ?
            this.state.catalog
            : <PurchaseDetail/>
        }
      </div>
    )
  }
}