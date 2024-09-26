import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Mess from './components/Mess.js';

function App() {
  return (
    <div className="App">
      <Greet name="Pikablok"/>
      <Welcome />
      <Mess />
    </div>
  );
}

export default App;
