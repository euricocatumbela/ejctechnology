import React from "react";
import contacts from "../Contact";
import Card_Team from "./Card_Team";
function Team() {
  function createCard(contact) {
    return (
      <Card_Team
        about={contact.about}
        image={contact.image}
        name={contact.name}
        title={contact.title}
      />
    );
  }
  return (
    <div className="Cards">
      <h1>Team</h1>
      <div className="CardGroup">{contacts.map(createCard)}</div>
    </div>
  );
}

export default Team;
