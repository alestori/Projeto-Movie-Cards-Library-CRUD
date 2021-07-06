import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <MovieList { ...props } /> }
          />
          <Route
            path="/movies/new"
            render={ (props) => <NewMovie { ...props } /> }
          />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          {/* <Route exact path="/movies/:id/edit" component={ EditMovie } /> */}
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route><NotFound /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
