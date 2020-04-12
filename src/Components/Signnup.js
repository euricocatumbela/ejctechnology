import React from "react";
import Forms from "./Forms";

function Signnup() {
  var isNotRegistered = false;

  return (
    <div>
      <div className="container">
        <Forms usernotRegistered={isNotRegistered} />
      </div>
    </div>
  );
}

export default Signnup;
