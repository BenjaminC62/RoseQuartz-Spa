import React from "react";
import "./../../../styles/Video.css";

function Video() {
  return (
    <section className="spa-background-next-section">
      <div className="bloc-spa-video">
        <iframe className="spa-video" width="1280" height="815" src="https://www.youtube.com/embed/p7tS77quSZI?si=ik997poJmTOqrgCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Video;
