import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Gugudan, GugudanM } from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/gugudan">
          <Gugudan />
          <GugudanM />
        </Route>
      </div>
    );
  }
}

export default App;
