import React from "react";
import { Route, Switch } from "react-router-dom";

import './app.css';
import ShopHeader from "../shop-header";
import { HomePage, CardPage } from '../pages';
import ShoppingCartTable from "../shopping-cart-table";
const App = () => {

  return (
      <main role="main" className="container">
        <ShopHeader />
        <Switch>
          <Route path="/" component={ HomePage } exact />
          <Route path="/cart" component={ CardPage } />
        </Switch>
        <ShoppingCartTable />
      </main>
  );
};

export default App;
