import React, { Component } from 'react';
import DrumMachine from '../DrumMachine/DrumMachine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>
          <h1>Drum Machine</h1>
        </header>
        
        <div id="content">
          <DrumMachine />
        </div>

        <footer>
          <p>made by <a href="https://github.com/moody" target="_blank" rel="noopener noreferrer">justin moody</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
