import React from "react";
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
        <div className="food-child">
          <p className="food-name">{food.name}</p>
          <img src={food.image} alt="food" className="images" />
          <div className="price-qty-add">
            <p>Rs. {food.price} /-</p>
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

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => {
                  this.handleCart(food, food.id);
                }}
                className="addCartButton"
                disabled={food.disable}
              >
                {food.value}
              </button>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}

export default Food;
