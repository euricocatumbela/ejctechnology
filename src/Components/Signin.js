import React from "react";
import Forms from "./Forms";
import Header from "./Header";
import Footer from "./Footer";
// import styled from "styled-components";

function Signin() {
  var userIsRegistered = true;

  //   function unStrike() {
  //     userIsRegistered = false;
  //   }

  return (
    <div className="Hero1">
      <Header />

      <div className="container">
        <Forms isRegistered={userIsRegistered} />
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
