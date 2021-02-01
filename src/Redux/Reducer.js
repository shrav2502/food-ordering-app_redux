import Menu from "../Components/Data/Menu";

const initialStore = {
  menu: Menu,
  quantity: 0,
  cart: [],
  totalPrice: 0,
};

function rootReducer(state = initialStore, action) {
  if (action.type === "INC_QTY") {
    let tempMenu = state.menu.map((item) => {
      if (item.id === action.foodId) {
        item = { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return { ...state, menu: tempMenu };
  }

  if (action.type === "DEC_QTY") {
    let tempMenu = state.menu.map((item) => {
      if (item.id === action.foodId) {
        if (item.quantity > 0) {
          item = { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    return { ...state, menu: tempMenu };
  }

  if (action.type === "ADD_CART") {
    let item = action.items;
    let buttonValue = state.menu.map((item) => {
      if (item.id === action.id) {
        item = { ...item, value: "Added", disable: true };
      }
      return item;
    });

    return { ...state, cart: [...state.cart, item], menu: buttonValue };
  }

  if (action.type === "INC_EDIT_CART") {
    let tempCart = state.cart.map((cartItem) => {
      state.menu.map((item) => {
        if (cartItem.id === action.id && item.id === action.id) {
          cartItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            price: cartItem.price + item.price,
          };
        }
        return null;
      });
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DEC_EDIT_CART") {
    let tempCart = state.cart.map((cartItem) => {
      state.menu.map((item) => {
        if (cartItem.id === action.id && item.id === action.id) {
          cartItem = {
            ...cartItem,
            quantity: cartItem.quantity - 1,
            price: cartItem.price - item.price,
          };
        }
        return null;
      });
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "CALCULATE_TOTAL") {
    let sum = [];
    let total = 0;
    if (state.cart.length > 0) {
      state.cart.map((cart) => {
        sum.push(cart.price);
        return null;
      });
      total = sum.reduce((a, b) => a + b);
    }

    return { ...state, totalPrice: total };
  }

  if (action.type === "REMOVE_CART") {
    let remove = state.cart.filter((item) => {
      return action.id !== item.id;
    });
    let buttonValue = state.menu.map((item) => {
      if (item.id === action.id) {
        item = { ...item, value: "Add to cart", disable: false };
      }
      return item;
    });

    return { ...state, cart: remove, menu: buttonValue };
  }

  return state;
}

export default rootReducer;
