import './App.scss';
import MainContent from '../mainContent/MainContent';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
