import React from "react";
import contacts from "../Contact";
import CardReact from "./CardReact";
import Header from "./Header";
function Team() {
  function createCard(contact) {
    return (
      <div>
        <CardReact
          about={contact.about}
          image={contact.image}
          name={contact.name}
          title={contact.title}
        />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="Cards">
        <h1>Team</h1>
        <div className="CardGroup">{contacts.map(createCard)}</div>
      </div>
    </div>
  );
}

export default Team;
