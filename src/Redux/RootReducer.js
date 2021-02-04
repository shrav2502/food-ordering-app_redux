import { combineReducers } from "redux";
import FoodReducer from "../Redux/FoodReducer";
import LoginReducer from "../Redux/LoginReducer";

const RootReducer = combineReducers({
  FoodReducer,
  LoginReducer,
});

export default RootReducer;
