import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Mess from './components/Mess.js';
import FunctionClick from './components/FunctionClick.js';
import Click from './components/Click.js';

function App() {
  return (
    <div className="App">
      <Greet name="Pikablok"/>
      <Welcome />
      <Mess />
      <FunctionClick />
      <Click />
    </div>
  );
}

export default App;
