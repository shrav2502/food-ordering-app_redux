import React, { Component } from "react";
import "../Stylesheet/style.css";
import Navbar from "./Navbar";
import { Link, Route } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import Cart from "./Cart";
import OrderSummary from "./OrderSummary";

export default class Home extends Component {
  render() {
    console.log(this.props.cart);
    return (
      <div>
        <Navbar {...this.props} />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <FoodMenu {...this.props} />
            </div>
          )}
        />
        <Route
          path="/cart"
          render={(params) => (
            <div>
              <Cart {...this.props} {...params} />
            </div>
          )}
        />
        <Route
          path="/ordersummary"
          render={() => (
            <div>
              <OrderSummary {...this.props} />
            </div>
          )}
        />
      </div>
    );
  }
}
