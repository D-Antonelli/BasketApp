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
    <div className="App h-screen bg-indigo-200 text-lg overflow-hidden">
      <Router>
        <Switch>
          <Switch>
            <Route path="/home" exact component={() => <Main />} />
            <Route path="/checkout" exact component={() => <Checkout />} />
          </Switch>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
