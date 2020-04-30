import React from "react";

function DemoCard(props) {
  return (
    <div className="HeroFaQ">
      <div className="GroupHeroFaQ">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default DemoCard;
