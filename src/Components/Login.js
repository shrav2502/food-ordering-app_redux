import React from "react";
import Button from "@material-ui/core/Button";

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-child">
          <h2 className="alignment">Login</h2>
          <form>
            <div className="credentials">
              <label>Name</label>
              <input type="text" placeholder="name" className="input" />
            </div>
            <br />
            <div className="credentials">
              <label>Contact Number</label>
              <input
                type="text"
                placeholder="contact number"
                className="input"
              />
            </div>
            <br />
            <div className="credentials">
              <label>Password</label>
              <input type="password" placeholder="password" className="input" />
            </div>
            <br />
            <div className="alignment">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </div>
            <p>
              New here? <a href="#">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
