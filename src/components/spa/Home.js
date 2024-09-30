import React from "react";
import spaImage from "./../../images/main-spa.png";

function Home() {
  const data = [
    {
      name: "Place of relaxation",
      subTitle: "lorem ispum dolor sit amet",
    },
  ];

  return (
    <main>
      {data.map((value) => {
        return (
          <div className="arrival-page">
            <span className="main-title">{value.name}</span>
            <span className="main-sub-title">{value.subTitle}</span>
            <img
              className="main-img"
              src={spaImage}
              width="100%"
              height="1080px"
              loading="eager"
              alt="spa"
            />
            <input
              className="button-discovery"
              type="button"
              value="discover"
            />
          </div>
        );
      })}
    </main>
  );
}

export default Home;
