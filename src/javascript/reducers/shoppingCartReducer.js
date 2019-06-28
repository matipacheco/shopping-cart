const EMPTY_SHOPPING_CART = [];

export default function shoppingCartReducer(state = EMPTY_SHOPPING_CART, action) {
  switch (action) {
    case "ADD_ITEM" : {
      return state
    }
    default : {
      return state
    }
  }
}
