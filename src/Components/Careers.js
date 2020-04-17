import React from "react";
import Jobs from "./Jobs";
import description from "./Description";
import Header from "./Header";
import Footer from "./Footer";

function Careers() {
  function createDescription(newDescription) {
    return (
      <div>
        <Jobs
          title={newDescription.title}
          content1={newDescription.content1}
          content2={newDescription.content2}
          content3={newDescription.content3}
          content4={newDescription.content4}
        />
      </div>
    );
  }

  return (
    <div>
      <div>
        <Header />
        <div className="Careers">{description.map(createDescription)}</div>
        <Footer />
      </div>
    </div>
  );
}

export default Careers;
