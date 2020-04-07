import React from "react";
import Header from "./Header";
import Card from "./Card";
import Section from "./Section";
import Waves from "./Waves";
import Footer from "./Footer";
function Home(props) {
  var d = new Date();
  var day = d.getDate();
  return (
    <div>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <h1>
            Learn to
            <br /> design and code modern Apps
          </h1>
          <p>
            courses about the best tools and design systems. Prototype and build
            apps with React and Swift.
          </p>
          <a href="/team">Watch the video</a>
          <div className="Logos">
            <img src="/images/logo-figma.png" alt="" width="60" />
            <img src="/images/logo-framer.png" alt="" width="60" />
            <img src="/images/logo-invision.png" alt="" width="60" />
            <img src="/images/logo-swift.png" alt="" width="60" />
            <img src="/images/logo-react.png" alt="" width="60" />
            <img src="/images/logo-sketch.png" alt="" width="60" />
          </div>

          <Waves />
        </div>
      </div>
      <div className="Cards-1">
        <h2>11 Courses, more coming</h2>
        <div className="Cards-1Group">
          <Card
            title="React for designers"
            text={day + " April "}
            image="/images/wallpaper.jpg"
          />
          <Card
            title="React for designers"
            text={day + " April "}
            image="/images/wallpaper.jpg"
          />
          <Card
            title="React for designers"
            text={day + " April "}
            image="/images/wallpaper.jpg"
          />
          <Card
            title="React for designers"
            text={day + " April "}
            image="/images/wallpaper.jpg"
          />
          <Card
            title="React for designers"
            text={day + " April "}
            image="/images/wallpaper.jpg"
          />
        </div>
      </div>
      <Section
        image="/images/wallpaper2.jpg"
        logo="/images/logo-react.png"
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />
      <Footer title />
    </div>
  );
}

export default Home;
