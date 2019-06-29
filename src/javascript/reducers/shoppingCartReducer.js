const EMPTY_SHOPPING_CART = [];

export default function shoppingCartReducer(state = EMPTY_SHOPPING_CART, action) {
  switch (action.type) {
    case "ADD_ITEM" : {
      return state.concat(action.payload)
    }
    default : {
      return state
    }
  }
}
