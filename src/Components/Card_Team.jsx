import React from "react";

function Card_Team(props) {
  return (
    <div className="Card">
      <img src={props.image} alt="" />
      <h4>{props.about}</h4>
      <h3>{props.name}</h3>
      <p>{props.title}</p>
    </div>
  );
}

export default Card_Team;
