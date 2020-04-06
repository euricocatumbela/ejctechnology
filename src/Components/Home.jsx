import React from "react";
import Header from "./Header";
import Card from "./Card";
function Home() {
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
          <svg
            width="100%"
            height="172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="white">
              <animate
                repeatCount="indefinite"
                fill="freeze"
                attributeName="d"
                dur="10s"
                values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.90189 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
                M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.90189 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
                "
              />
              " />
            </path>
          </svg>
        </div>
      </div>
      <div className="cards-1">
        <div className="Cards-1Group">
          <h2>11 Courses, more coming</h2>
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
    </div>
  );
}

export default Home;
