import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Job(props) {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <p>{props.content1}</p>
        <p>{props.content2} </p>
        <p>{props.content3}</p>
        <p>{props.content4}</p>
      </div>
    </div>
  );
}

export default Job;
