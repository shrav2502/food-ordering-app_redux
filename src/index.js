import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { createStore } from "redux";
import RootReducer from "./Redux/RootReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Test from "./Components/Test";

const store = createStore(RootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
