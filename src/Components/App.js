import { connect } from "react-redux";
import * as foodActions from "../Redux/FoodActions";
import * as loginActions from "../Redux/LoginAction";
import { bindActionCreators } from "redux";
import Main from "./Main";

function mapStateToProps(state) {
  console.log(state);
  return {
    menu: state.FoodReducer.menu,
    quantity: state.FoodReducer.quantity,
    cart: state.FoodReducer.cart,
    totalPrice: state.FoodReducer.totalPrice,
    login: state.LoginReducer.login,
    confirm: state.LoginReducer.confirm,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, foodActions, loginActions),
    dispatch
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
