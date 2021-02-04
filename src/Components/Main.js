import React from "react";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import Cart from "./Cart";
import OrderSummary from "./OrderSummary";
import "../Stylesheet/style.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Payment from "./Payment";

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

        <Route
          path="/login"
          render={(params) => <Login {...this.props} {...params} />}
        />

        <Route path="/signUp" render={() => <SignUp {...this.props} />} />

        <Route path="/payment" render={() => <Payment {...this.props} />} />
      </div>
    );
  }
}

export default Main;
