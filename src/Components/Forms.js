import React from "react";
import { Link } from "react-router-dom";

function Forms(props) {
  return (
    <div>
      <div className="SigninCard">
        <form className="form">
          <img src="/images/Logo.svg" alt="" width="60" />
          <h1>EJC TECHNOLOGY</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />

          {!props.isRegistered && (
            <input type="password" placeholder="Confirm Password" />
          )}

          <button type="submit">
            {props.isRegistered ? "Login" : "Register"}
          </button>

          <p>
            {props.isRegistered
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>

          <Link to={props.isRegistered ? "/signnup" : "/signin"}>
            {!props.isRegistered ? "Sign in now" : "Sign UP"}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Forms;
