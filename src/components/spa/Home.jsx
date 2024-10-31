import React from "react";
import spaImage from "./../../images/main-spa.png";
import GridServices from "./HomePage/GridServices";
import VideoQuote from "./HomePage/VideoQuote";
import { motion } from "framer-motion";
import Tarif from "./HomePage/Tarif";

function Home() {
  const data = [
    {
      name: "Place of relaxation",
      subTitle: "Experience tranquility and bliss with our premium spa treatments.",
    },
  ];

  return (
    <main>
      {data.map((value) => {
        return (
          <div className="arrival-page" id="arrival-page">
            <span className="main-title">{value.name}</span>
            <span className="main-sub-title">{value.subTitle}</span>
            <div className="arrival-page" id="arrival-page" style={{ backgroundImage: `url(${spaImage})`, backgroundSize: 'cover', height: '100vh' }}></div>
            <input
              className="button-discovery"
              type="button"
              value="discover"
            />
            <GridServices />
            <VideoQuote />
            <Tarif />
          </div>
        );
      })}
    </main>
  );
}

export default Home;
