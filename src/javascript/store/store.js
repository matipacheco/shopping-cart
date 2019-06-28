import { createStore, combineReducers } from "redux";

import shoppingCartReducer from "../reducers/shoppingCartReducer";

const reducers = combineReducers({
  catalog: shoppingCartReducer
});

const store = createStore(reducers);
export default store;
