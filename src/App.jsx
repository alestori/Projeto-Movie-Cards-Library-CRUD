import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, MovieDetails, NotFound, EditMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Movie Card Library CRUD</h1>
      </header>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
