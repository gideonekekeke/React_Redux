import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeSccreen from "./Component/HomeSccreen";
import Header from "./Component/Header";
import CartDetails from "./Component/CartDetails";
import SingleCart from "./Component/SingleCart";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeSccreen} />
          <Route path="/cart" component={CartDetails} />
          <Route path="/prod:id" component={SingleCart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
