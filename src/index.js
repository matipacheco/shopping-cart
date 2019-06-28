import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import App from "./javascript/components/App";
import store from "./javascript/store/store";

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
