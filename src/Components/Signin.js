import React from "react";
import Forms from "./Forms";
// import styled from "styled-components";

function Signin() {
  var userIsRegistered = true;

  //   function unStrike() {
  //     userIsRegistered = false;
  //   }

  return (
    <di>
      <div className="container">
        <Forms isRegistered={userIsRegistered} />
      </div>
    </di>
  );
}

export default Signin;
