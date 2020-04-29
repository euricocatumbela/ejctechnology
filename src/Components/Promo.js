import React from "react";

function Promo(props) {
  return (
    <div>
      <div className="Card-Promo">
        <h1>{props.title}</h1>
        <h2>{props.price} </h2>
        <p>{props.content1}</p>
        <p>{props.content2}</p>
        <p>{props.content3}</p>
        <button>GET PRO WEBSITE</button>
      </div>
    </div>
  );
}

export default Promo;
