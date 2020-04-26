import React from "react";

function Detail(props) {
  return (
    <div className="CardTeam">
      <img alt="" src={props.img}></img>
      <p>{props.bio}</p>
      <h3>{props.name}</h3>
      <h4>{props.title}</h4>
    </div>
  );
}

export default Detail;
