import { createStore, combineReducers } from "redux";

import shoppingCartReducer from "../reducers/shoppingCartReducer";

const reducers = combineReducers({
  shoppingCart: shoppingCartReducer
});

const store = createStore(reducers);
export default store;
