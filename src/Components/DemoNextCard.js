import React from "react";

function DemoNextCard(props) {
  return (
    <div className="NextHeroFQA">
      <div className="GroupNextHeroFQA">
        <h2>{props.title}</h2>
        <p>
          <span>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
            <p>{props.paragraph3}</p>
            <p>{props.paragraph4}</p>
          </span>
        </p>
      </div>
    </div>
  );
}

export default DemoNextCard;
