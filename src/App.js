import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <section>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><MovieList /></Route>
          <Route path="/movies/new"><NewMovie /></Route>
          <Route path="/movies/:id/edit"><EditMovie /></Route>
          <Route path="/movies/:id"><MovieDetails /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
