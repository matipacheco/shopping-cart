import React, { Component } from "react";
import TheStore from "./TheStore"
import Header from "./Header"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TheStore/>
      </div>
    );
  }
}

export default App;
