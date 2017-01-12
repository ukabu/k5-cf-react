import React, { Component } from 'react';
import logo from './Symbol-Fujitsu-256px.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenue sur Fujitsu K5 PaaS!</h2>
        </div>
        <p className="App-intro">
          Pour démarrer, modifier <code>src/App.js</code>.
        </p>
      </div>
    );
  }
}

export default App;
