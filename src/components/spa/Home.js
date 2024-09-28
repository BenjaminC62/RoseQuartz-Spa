import React from "react";
import mainImg from "./../../images/main-spa.jpg";

function Home() {
  const data = [
    {
      name: "Place of relaxation",
      subTitle: "",
    },
  ];

  return (
    <main>
      <div className="arrival-page">
        {data.map((value) => {
          return <span className="main-title">{value.name}</span>;
        })}
        <img className="main-img" src={mainImg} width="100%" height="1080px" />
      </div>
    </main>
  );
}

export default Home;
