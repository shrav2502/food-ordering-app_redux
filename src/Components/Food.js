import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class Food extends React.Component {
  handleCart = (food, id, value) => {
    if (food.quantity === 0) {
      alert("Enter right quantity");
    } else {
      this.props.addCart(id);
    }
    if (value === true) {
      this.props.removeFromCart(id);
      this.props.makeQuantityZero(id);
    }
  };

  handleDecreaseInQuantity = (qty, id, price) => {
    if (qty <= 1) {
      this.props.removeFromCart(id);
      this.props.makeQuantityZero(id);
    } else {
      this.props.decreaseQuantity(qty, id);
      this.props.decreaseQuantityWithPrice(qty, price, id);
    }
  };

  render() {
    const food = this.props.menu;
    return (
      <Paper variant="outlined" square className="food">
        <div className="food-child">
          <p className="food-name">{food.name}</p>
          <img src={food.image} alt="food" className="images" />
          <div className="price-qty-add">
            <p>Rs. {food.price} /-</p>
            <div className="quantity">
              <Button
                onClick={() => {
                  this.handleDecreaseInQuantity(
                    food.quantity,
                    food.id,
                    food.price
                  );
                }}
                variant="contained"
                color="primary"
              >
                -
              </Button>
              <div className="style-qty">{food.quantity}</div>
              <Button
                onClick={() => {
                  this.props.increaseQuantity(food.quantity, food.id);
                  this.props.increaseQuantityWithPrice(
                    food.quantity,
                    food.price,
                    food.id
                  );
                }}
                variant="contained"
                color="primary"
              >
                +
              </Button>
            </div>

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => {
                  this.handleCart(food, food.id, food.value);
                }}
                className={food.value ? "remove" : "addCartButton"}
                // disabled={food.disable}
              >
                {food.value ? "Remove" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Food;
