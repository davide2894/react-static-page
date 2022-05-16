import logo from './logo.svg';
import './App.css';
import './components/funFacts/FunFacts';
import FunFacts from './components/funFacts/FunFacts';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} width="200px"></img>
        </nav>
        <h1>Reasons I'm excited to learn React</h1>
      </header>
      <FunFacts></FunFacts>
      <footer>
        <p>© 2022 Davide Iaiunese development. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
