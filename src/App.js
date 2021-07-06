import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieSite from './MovieSite';

class App extends Component {
  render() {
    return (
      <Router>
        <MovieSite />
      </Router>
    );
  }
}

export default App;
