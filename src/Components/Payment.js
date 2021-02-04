import React from "react";

function Payment(props) {
  return (
    <div className="login ">
      <div className="login-child">
        <h3>Total Amount: Rs. {props.totalPrice} /-</h3>
      </div>
    </div>
  );
}

export default Payment;
