import React from "react";
import "./../../../styles/Video.css";
import relaxationSymbol1 from "./../../../images/relaxation-symbol-1.png";

function VideoQuote() {

  const quotes = [
    {
      id : 1,
      quote : "The best way to find yourself is to lose yourself in the service of others.",
      author : "Mahatma Gandhi"
    },
    {
      id : 2,
      quote : "Test2",
      author : "Mahatma Gandhi2"
    },
    {
      id : 3,
      quote : "Test3",
      author : "Mahatma Gandhi3"
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
        <iframe className="spa-video" width="1280" height="815" src="https://www.youtube.com/embed/p7tS77quSZI?si=ik997poJmTOqrgCw" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="spa-quote">
        <img className="spa-symbol-relaxation" width="300"  height="300" src={relaxationSymbol1} alt="spa" />
            <div className="change-quotes">
              <input type="button" value="" className="spa-quote-button-backward" onClick={() => changesImage("backward")}/>
              <div className="quotes-text-author">
                <span className="spa-quote-text">{selectedQuote.quote}</span>
                <br />
                <span className="spa-quote-author">{selectedQuote.author}</span>
              </div>
              <input type="button" value="" className="spa-quote-button-upward" onClick={() => changesImage("forward")}/>
            </div>
      </div>
      
    </section>
  );
}

export default VideoQuote;
