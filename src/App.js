import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <section>
      <h1>Movie Card Library CRUD</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><MovieList /></Route>
          <Route path="/movies/new"><NewMovie /></Route>
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
