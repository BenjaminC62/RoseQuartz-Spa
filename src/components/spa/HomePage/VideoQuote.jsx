import React from "react";
import "./../../../styles/Video.css";
import relaxationSymbol1 from "./../../../images/relaxation-symbol-1.png";
import video from "./../../../images/spa-pool.webm";

function VideoQuote() {

  const quotes = [
    {
      id: 1,
      quote: "The best way to find yourself is to lose yourself in the service of others.",
      author: "Mahatma Gandhi"
    },
    {
      id: 2,
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      id: 3,
      quote: "Calm mind brings inner strength and self-confidence, so that’s very important for good health.",
      author: "Dalai Lama"
    },
    {
      id: 4,
      quote: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
      author: "Buddha"
    },
    {
      id: 5,
      quote: "The greatest wealth is health.",
      author: "Virgil"
    }
  ]

  const [selectedId, setSelectedId] = React.useState(1);

  const changesImage = (direction) => {
    if (direction === "backward") {
      setSelectedId(selectedId === 1 ? quotes.length : selectedId - 1);
    } else if (direction === "forward") {
      setSelectedId(selectedId === quotes.length ? 1 : selectedId + 1);
    }
  };


  const selectedQuote = quotes.find(quote => quote.id === selectedId);

  return (
    <section className="spa-background-next-section">
      <div className="bloc-spa-video">
        <video className="spa-video" autoPlay loop muted>
          <source  src={video} type="video/webm" />
        </video>
      </div>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="spa-quote">
        <img className="spa-symbol-relaxation" width="300"  height="300" src={relaxationSymbol1} alt="spa" aria-label="Previous quote"/>
            <div className="change-quotes">
              <input type="button" value="" className="spa-quote-button-backward" onClick={() => changesImage("backward")}/>
              <div className="quotes-text-author">
                <span className="spa-quote-text">{selectedQuote.quote}</span>
                <br />
                <span className="spa-quote-author">{selectedQuote.author}</span>
              </div>
              <input type="button" value="" className="spa-quote-button-upward" onClick={() => changesImage("forward")} aria-label="Next quote"/>
            </div>
      </div>
      
    </section>
  );
}

export default VideoQuote;
