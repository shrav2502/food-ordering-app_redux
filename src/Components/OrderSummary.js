import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function OrderSummary(props) {
  return (
    <Paper className="order-summary">
      <h2 style={{ textAlign: "center" }}>Order Summary</h2>
      <div className="name-qty" style={{ backgroundColor: "#FEFBE3" }}>
        <div>Name</div>
        <div>Qty</div>
      </div>
      {props.cart.map((cartItems) => (
        <div>
          <div className="name-qty">
            <div>{cartItems.name}</div>
            <div>{cartItems.quantity}</div>
          </div>
        </div>
      ))}
      <div className="totalPrice">
        <span style={{ backgroundColor: "#d3d3d3", padding: "5px" }}>
          Total Price: {props.totalPrice} /-
        </span>
      </div>
      <div className="order-btn">
        <Button color="secondary">Place Order</Button>
      </div>
    </Paper>
  );
}

export default OrderSummary;
