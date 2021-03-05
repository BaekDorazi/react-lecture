import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Gugudan } from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/gugudan">
          <Gugudan />
          <Gugudan />
          <Gugudan />
        </Route>
      </div>
    );
  }
}

export default App;
