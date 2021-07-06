import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route exact path="/" render={ () => <MovieList movies="" /> } />
      <Route path="/movies/:id" render={ () => <MovieDetails movie="" /> } />
      <Route path="/movies/new" render={ () => <NewMovie /> } />
      <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
      <Route path="" render={ () => <NotFound /> } />
    </BrowserRouter>
  );
}

export default App;
