import React from "react";
import descriptions from "./Description";
import Header from "./Header";
import Footer from "./Footer";
import DemoNextCard from "./DemoNextCard";

function Careers() {
  return (
    <div>
      <Header />
      <div className="HeadingCareer">
        <h1>Come work with us!</h1>
        <DemoNextCard
          title={descriptions[0].title}
          paragraph1={descriptions[0].paragraph1}
          paragraph2={descriptions[0].paragraph2}
          paragraph3={descriptions[0].paragraph3}
          paragraph4={descriptions[0].paragraph4}
        />
        <DemoNextCard
          title={descriptions[0].title}
          paragraph1={descriptions[0].paragraph1}
          paragraph2={descriptions[0].paragraph2}
          paragraph3={descriptions[0].paragraph3}
          paragraph4={descriptions[0].paragraph4}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Careers;
