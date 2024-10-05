import React from "react";
import "./../../../styles/Video.css";
import relaxationSymbol1 from "./../../../images/relaxation-symbol-1.png";

function Video() {
  return (
    <section className="spa-background-next-section">
      <div className="bloc-spa-video">
        <iframe className="spa-video" width="1280" height="815" src="https://www.youtube.com/embed/p7tS77quSZI?si=ik997poJmTOqrgCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="spa-quote">
        <img className="spa-symbol-relaxation" width="300"  height="300" src={relaxationSymbol1} alt="spa" />
        <p className="spa-quote-text">
          "The best way to find yourself is to lose yourself in the service of others."
          <br />
          <span className="spa-quote-author">- Mahatma Gandhi -</span>
        </p>
      </div>
      
    </section>
  );
}

export default Video;
