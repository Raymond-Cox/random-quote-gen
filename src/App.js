import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import RandomQuoteGen from './getQuote.js';
import Header from './header.js';
import Credits from './credits.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RandomQuoteGen />
        <Credits />
      </div>
    );
  }
}

export default App;
