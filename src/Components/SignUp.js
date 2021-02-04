import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    if (password === confirmPassword) {
      localStorage.setItem("name", name);
      localStorage.setItem("contact", contact);
      localStorage.setItem("password", password);
      props.addNewCustomer(name, contact, password);
      alert("Sign up successfull. Login to proceed with the payment");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="login">
      <div className="login-child">
        <h2 className="alignment">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="credentials">
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
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
          <div className="credentials">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="retype password"
              className="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="alignment">
            <input type="submit" variant="contained" color="primary"></input>
          </div>
          <p>
            Already have an account ? <Link to="login">Login </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
