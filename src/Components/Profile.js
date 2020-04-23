import React from "react";

function Profile(props) {
  return (
    <div>
      <div className="Profile">
        <img alt="" src={props.image} />
        <h4>{props.bio}</h4>
        <h2>{props.title}</h2>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Profile;
