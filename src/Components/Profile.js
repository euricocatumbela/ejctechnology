import React from "react";
import Header from "./Header";

function Profile(props) {
  return (
    <div>
      <div className="Profile">
        <img src={props.image} />
        <h4>{props.bio}</h4>
        <h2>{props.title}</h2>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Profile;
