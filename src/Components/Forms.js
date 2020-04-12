import React from "react";

function Forms(props) {
  return (
    <div className="card-02">
      <form className="form">
        <img src="/images/ejc-techno.svg" alt="" width="90" />
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
        {/* <a href onClick={strike}>
          + {count}
        </a> */}
        <a href={props.isRegistered ? "/signnup" : "/signin"}>
          {!props.isRegistered ? "Sign in now" : "Sign UP"}
        </a>
      </form>
    </div>
  );
}

export default Forms;
