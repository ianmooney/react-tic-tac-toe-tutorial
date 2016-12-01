import React, { Component } from 'react';
import Game from './Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Tutorial - Tic Tac Toe</h2>
        </div>
        <p className="App-intro">
          To begin a game, grab a friend and click on the squares below.
        </p>
        <Game />
      </div>
    );
  }
}

export default App;
