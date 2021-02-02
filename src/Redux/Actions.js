export function increaseQuantity(qty, foodId) {
  return {
    type: "INC_QTY",
    qty,
    foodId,
  };
}

export function decreaseQuantity(qty, foodId) {
  return {
    type: "DEC_QTY",
    qty,
    foodId,
  };
}

export function addCart(id) {
  return {
    type: "ADD_CART",
    id,
  };
}

export function increaseQuantityWithPrice(qty1, price, id) {
  return {
    type: "INC_EDIT_CART",
    qty1,
    price,
    id,
  };
}

export function decreaseQuantityWithPrice(qty1, price, id) {
  return {
    type: "DEC_EDIT_CART",
    qty1,
    price,
    id,
  };
}

export function calculateTotal() {
  return {
    type: "CALCULATE_TOTAL",
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_CART",
    id,
  };
}

export function makeQuantityZero(id) {
  return {
    type: "MAKE_ZERO",
    id,
  };
}
