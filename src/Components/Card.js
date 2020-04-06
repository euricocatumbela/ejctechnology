import React from "react";

function Card(props) {
  return (
    <div className="Card-1">
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;
