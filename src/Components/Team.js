import React from "react";
import Detail from "./Detail";
import contacts from "./Static";
import Header from "./Header";
import Footer from "./Footer";

function Team() {
  function createCard(card) {
    return (
      <Detail
        img={card.image}
        bio={card.bio}
        name={card.name}
        title={card.title}
      />
    );
  }
  return (
    <div className="Responsive">
      <Header />
      <div className="TeamHeading">
        <h1>The Team </h1>
        <div className="GroupTeam">{contacts.map(createCard)}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
