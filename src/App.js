import logo from './logo.svg';
import './App.css';
import './components/funFacts/FunFacts';
import FunFacts from './components/funFacts/FunFacts';

function App() {
  return (
    <div className="App">
      <img src={logo} width="200px"></img>
      <h1>Fun facts about React</h1>
      <FunFacts></FunFacts>
    </div>
  );
}

export default App;
