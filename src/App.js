import React from 'react';
import './App.css';
import logo from './criador_colorido.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.instagram.com/andreiaaraujointeriores/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andreia Araujo Interiores
        </a>
      </header>
    </div>
  );
}

export default App;
