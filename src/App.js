import "./styles/App.css";
import "./styles/Home.css";
import Nav from "./components/spa/Nav";
import Home from "./components/spa/Home";

function App() {
  return (
    <div className="Container">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
