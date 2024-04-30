// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import SportsContainer from './Components/SportsContainer';
import SportForm from './Components/SportForm'

function App() {
  const [sports, setSports] = useState([])

  function onAddSport(newSport) {
    setSports([...sports, newSport])
  }

  return (
    <div className="App">
      <SportForm onAddSport={onAddSport}/>
      <SportsContainer setSports={setSports} sports={sports}/>
    </div>
  );
}

export default App;


  {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}