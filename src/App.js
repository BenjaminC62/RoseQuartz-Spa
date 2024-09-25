import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';

function App() {
  return (
    <div className="App">
      <Greet name="Pikablok"/>
      <Welcome />
    </div>
  );
}

export default App;
