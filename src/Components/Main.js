import React from "react";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import Cart from "./Cart";
import OrderSummary from "./OrderSummary";
import "../Stylesheet/style.css";
import Login from "./Login";

class Main extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Navbar {...this.props} />

        <Route exact path="/" render={() => <FoodMenu {...this.props} />} />

        <Route
          path="/cart"
          render={(params) => <Cart {...this.props} {...params} />}
        />
        <Route
          path="/ordersummary"
          render={(params) => <OrderSummary {...this.props} {...params} />}
        />

        <Route path="/login" render={() => <Login />} />
      </div>
    );
  }
}

export default Main;
