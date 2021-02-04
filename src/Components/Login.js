import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Login = (props) => {
  // const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact1 = localStorage.getItem("contact");
    const password1 = localStorage.getItem("password");
    if (contact1 === contact && password1 === password) {
      alert("Login successfull");
      props.history.push("/payment");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <div className="login-child">
        <h2 className="alignment">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="credentials">
            <label>Contact Number</label>
            <input
              type="text"
              placeholder="contact number"
              className="input"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <br />
          <div className="credentials">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="alignment">
            <input type="submit" variant="contained" color="primary"></input>
          </div>
          <p>
            New here? <Link to="/signUp">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
