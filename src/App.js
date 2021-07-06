import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Route
          path="/"
          exact
          render={
            (props) => <MovieList { ...props } />
          }
        />
        <Route
          path="/movies/:id"
          exact
          render={
            (props) => <MovieDetails { ...props } />
          }
        />
        <Route
          path="/movies/new"
          exact
          render={
            (props) => <NewMovie { ...props } />
          }
        />
        <Route
          path="/movies/:id/edit"
          exact
          render={
            (props) => <EditMovie { ...props } />
          }
        />
        <Route
          path=""
          component={ NotFound }
        />
      </BrowserRouter>
    );
  }
}

export default App;
