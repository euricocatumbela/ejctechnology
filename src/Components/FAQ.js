import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DemoCard from "./DemoCard";
import DemoNextCard from "./DemoNextCard";
import contents from "./content";

function FAQ(props) {
  return (
    <div className="ParentContainer=">
      <Header />
      <div className="HeadingFAQ">
        <h1>FQA</h1>
        <div>
          <DemoCard title={contents[0].title} content={contents[0].content} />

          <DemoNextCard
            title={contents[1].title}
            paragraph1={contents[1].paragraph1}
            paragraph2={contents[1].paragraph2}
            paragraph3={contents[1].paragraph3}
            paragraph4={contents[1].paragraph4}
          />
          <DemoCard title={contents[2].title} content={contents[2].content} />
          <DemoCard title={contents[3].title} content={contents[3].content} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
