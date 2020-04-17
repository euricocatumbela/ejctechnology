import React from "react";
import Profile from "./Profile";
import contacts from "./Static";
import Header from "./Header";
import Footer from "./Footer";

function Team() {
  function createProfile(create) {
    return (
      <Profile
        image={create.image}
        bio={create.bio}
        name={create.title}
        title={create.name}
      />
    );
  }

  return (
    <div className="Profiles">
      <Header />
      <div className="Team">
        <h2> Meet our Team</h2>
      </div>
      <div className="ProfileGroup">{contacts.map(createProfile)}</div>

      <Footer />
    </div>
  );
}

export default Team;
