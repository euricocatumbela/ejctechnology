import React from "react";
import Forms from "./Forms";
import Footer from "./Footer";
import Header from "./Header";

function Signnup() {
  var isNotRegistered = false;

  return (
    <div className="Hero1">
      <Header />
      <div className="container">
        <Forms usernotRegistered={isNotRegistered} />
      </div>
      <Footer />
    </div>
  );
}

export default Signnup;
