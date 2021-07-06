import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from '../pages/MovieList';
import MovieDetails from '../pages/MovieDetails';
import NewMovie from '../pages/NewMovie';
import EditMovie from '../pages/EditMovie';
import NotFound from '../pages/NotFound';

class Home extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route path="/movies/new" render={ () => <NewMovie /> } />
        <Route path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route path="" render={ () => <NotFound /> } />
      </Switch>
    );
  }
}

export default Home;
