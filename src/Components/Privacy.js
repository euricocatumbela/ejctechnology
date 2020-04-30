import React from "react";
import DemoNextCard from "./DemoNextCard";
import descriptions from "./Description";
import contents from "./content";
import DemoCard from "./DemoCard";
import Header from "./Header";
import Footer from "./Footer";
function Privacy() {
  return (
    <div>
      <Header />
      <div className="HeadingFAQ">
        <h1>Privacy Policy</h1>

        <DemoNextCard
          title={descriptions[2].title}
          paragraph1={descriptions[2].paragraph1}
          paragraph2={descriptions[2].paragraph2}
          paragraph3={descriptions[2].paragraph3}
          paragraph4={descriptions[2].paragraph4}
        />

        <DemoNextCard
          title={descriptions[3].title}
          paragraph1={descriptions[3].paragraph1}
          paragraph2={descriptions[3].paragraph2}
          paragraph3={descriptions[3].paragraph3}
          paragraph4={descriptions[3].paragraph4}
        />
        <DemoNextCard
          title={descriptions[4].title}
          paragraph1={descriptions[4].paragraph1}
          paragraph2={descriptions[4].paragraph2}
          paragraph3={descriptions[4].paragraph3}
          paragraph4={descriptions[4].paragraph4}
        />
        <DemoCard title={contents[4].title} content={contents[4].content} />
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
