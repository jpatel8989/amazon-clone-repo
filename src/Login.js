import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import auth from "./firebase";

function Login() {
  const [email, setEmail] = useState(""); // useState hook
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const login = (event) => {
    event.preventDefault(); // Stops from refreshing the page
    // Login logic below

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // actoion to be performed after logging in
        // logged in and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); // Stops from refreshing the page
    // Login register below

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // actoion to be performed after registering
        //  create a user and logged in and redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="login_logo"
        ></img>
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
          <button onClick={login} className="login_SignInButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button onClick={register} className="login_RegButon">
          {" "}
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
