import { createStore, combineReducers } from "redux";

import catalogReducer from "../reducers/shoppingCartReducer";

const reducers = combineReducers({
  catalog: catalogReducer
});

const store = createStore(reducers);
export default store;
