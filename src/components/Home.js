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
        <Route exact path="/movies/:id" render={ () => <MovieDetails /> } />
        <Route exact path="/movies/new" render={ () => <NewMovie /> } />
        <Route exact path="/movies/:id/edit" render={ () => <EditMovie /> } />
        <Route path="" render={ () => <NotFound /> } />
      </Switch>
    );
  }
}

export default Home;
