import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class Food extends React.Component {
  handleCart = (food, id) => {
    if (food.quantity === 0) {
      alert("Enter right quantity");
    } else {
      const items = {
        id: food.id,
        name: food.name,
        price: food.price * food.quantity,
        quantity: food.quantity,
      };
      this.props.addCart(items, id);
    }
  };

  render() {
    const food = this.props.menu;

    return (
      <Paper variant="outlined" square className="food">
        <p className="food-name">{food.name}</p>
        <div className="quantity">
          <Button
            onClick={() => {
              this.props.decreaseQuantity(food.qty, food.id);
            }}
            variant="contained"
            color="primary"
          >
            -
          </Button>
          <div className="style-qty">{food.quantity}</div>
          <Button
            onClick={() => {
              this.props.increaseQuantity(food.qty, food.id);
            }}
            variant="contained"
            color="primary"
          >
            +
          </Button>
        </div>
        <p>Rs. {food.price} /-</p>
        <button
          onClick={() => {
            this.handleCart(food, food.id);
          }}
          className="addCartButton"
          disabled={food.disable}
        >
          {food.value}
        </button>
      </Paper>
    );
  }
}

export default Food;
