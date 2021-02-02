import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import NoItemsAdded from "./NoItemsAdded";

class Cart extends React.Component {
  handleProceedOrder = (cart) => {
    if (cart.length <= 0) {
      alert("No items have been added to the cart!");
    } else {
      this.props.history.push("/ordersummary");
    }
  };

  handleDecreaseInQuantity = (qty, price, id) => {
    if (qty <= 1) {
      this.props.removeFromCart(id, price);
      this.props.makeQuantityZero(id);
    } else {
      this.props.decreaseQuantityWithPrice(qty, price, id);
      this.props.decreaseQuantity(qty, id);
    }
  };
  render() {
    const cart = this.props.cart;
    const totalPrice = this.props.totalPrice;
    this.props.calculateTotal();
    return (
      <div style={{ marginTop: "7rem" }}>
        {cart.length <= 0 ? (
          <NoItemsAdded />
        ) : (
          <div>
            {cart.map((item) => (
              <Paper variant="outlined" square className="cart">
                <div className="food-name">{item.name}</div>
                <div className="quantity">
                  <Button
                    onClick={() => {
                      this.handleDecreaseInQuantity(
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
                      this.props.increaseQuantity(item.quantity, item.id);
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
                  this.handleProceedOrder(cart);
                }}
                className="proceed-btn"
                color="primary"
                variant="contained"
              >
                Proceed to order
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
