import Checkout from "./components/checkout";
import Main from "./components/main";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Switch>
          <Switch>
            <Route path="/" exact component={() => <Main />} />
            <Route path="/checkout" exact component={() => <Checkout />} />
          </Switch>
        </Switch>
      </Router>
  );
};

export default App;
