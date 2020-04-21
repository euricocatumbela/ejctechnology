import React from "react";

function Profile(props) {
  return (
    <div>
      <div id="buzzsprout-large-player-1027399"></div>
      <script
        type="text/javascript"
        charset="utf-8"
        src="https://www.buzzsprout.com/1027399.js?container_id=buzzsprout-large-player-1027399&player=large"
      ></script>
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
