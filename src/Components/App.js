import { connect } from "react-redux";
import * as actions from "../Redux/Actions";
import { bindActionCreators } from "redux";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    menu: state.menu,
    quantity: state.quantity,
    cart: state.cart,
    totalPrice: state.totalPrice,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
