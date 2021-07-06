import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

class App extends Component {
  // state = { }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ MovieList } />
      </BrowserRouter>
    );
  }
}

export default App;
