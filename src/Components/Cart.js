import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class Cart extends React.Component {
  render() {
    const cart = this.props.cart;
    const totalPrice = this.props.totalPrice;
    this.props.calculateTotal();
    return (
      <div style={{ marginTop: "7rem" }}>
        {cart.map((item) => (
          <Paper variant="outlined" square className="cart">
            <div className="food-name">{item.name}</div>
            <div className="quantity">
              <Button
                onClick={() => {
                  this.props.decreaseQuantityWithPrice(
                    item.quantity,
                    item.price,
                    item.id
                  );
                }}
                variant="contained"
                color="primary"
              >
                -
              </Button>
              <div className="style-qty">{item.quantity}</div>
              <Button
                onClick={() => {
                  this.props.increaseQuantityWithPrice(
                    item.quantity,
                    item.price,
                    item.id
                  );
                }}
                variant="contained"
                color="primary"
              >
                +
              </Button>
            </div>
            <div>Rs. {item.price}</div>
            <Button
              onClick={() => {
                this.props.removeFromCart(item.id, item.price);
              }}
              variant="contained"
              color="secondary"
            >
              Remove
            </Button>
          </Paper>
        ))}
        <div className="price">Total Price: {totalPrice} /-</div>
        <div className="style-proceed-btn">
          <Button
            onClick={() => {
              this.props.history.push("/ordersummary");
            }}
            className="proceed-btn"
            color="primary"
            variant="contained"
          >
            Proceed to order
          </Button>
        </div>
      </div>
    );
  }
}

export default Cart;
