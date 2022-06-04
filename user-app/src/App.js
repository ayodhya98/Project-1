import logo from './logo.svg';
import './App.css';
import HomeComponent from './Page/HomeComponents';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeComponent/>
    </div>
  );
}

export default App;

