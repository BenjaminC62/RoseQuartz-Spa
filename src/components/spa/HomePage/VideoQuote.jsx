import React from "react";
import "./../../../styles/Video.css";
import relaxationSymbol1 from "./../../../images/relaxation-symbol-1.png";

function VideoQuote() {

  const backInput = document.querySelector(".spa-quote-button-backward");
  const forwardInput = document.querySelector(".spa-quote-button-upward");

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

  const changesImage = () => {
    console.log(selectedId);
      if(backInput === document.activeElement) {
        if(selectedId === 1) {
          setSelectedId(quotes.length);
        }
        else{
          setSelectedId(selectedId - 1); 
        }
      }
      if(forwardInput === document.activeElement) {
        if(selectedId === quotes.length) {
          setSelectedId(1);
        }
        else {
          setSelectedId(selectedId + 1);
        }
      }
    }

  const selectedQuote = quotes.find(quote => quote.id === selectedId);

  return (
    <section className="spa-background-next-section">
      <div className="bloc-spa-video">
        <iframe className="spa-video" width="1280" height="815" src="https://www.youtube.com/embed/p7tS77quSZI?si=ik997poJmTOqrgCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="spa-quote">
        <img className="spa-symbol-relaxation" width="300"  height="300" src={relaxationSymbol1} alt="spa" />
            <div className="change-quotes">
              <input type="button" value="" className="spa-quote-button-backward" onClick={changesImage}/>
              <div className="quotes-text-author">
                <span className="spa-quote-text">{selectedQuote.quote}</span>
                <br />
                <span className="spa-quote-author">{selectedQuote.author}</span>
              </div>
              <input type="button" value="" className="spa-quote-button-upward" onClick={changesImage}/>
            </div>
      </div>
      
    </section>
  );
}

export default VideoQuote;
