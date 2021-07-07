import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, NewMovie, MovieList, NotFound } from './pages';
//  import dos components a partir do index.js em pages, mais simples.

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/" component={ MovieList } />
        <Route path="-" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
