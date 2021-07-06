import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NotFound from './pages/NotFound';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          <Switch>
            <Route path="/movies/new" component={ NewMovie } />
            <Route exact path="/" component={ MovieList } />
            <Route
              exact
              path="/movies/:id/edit"
              render={ (props) => <EditMovie { ...props } /> }
            />
            <Route
              path="/movies/:id"
              render={ (props) => <MovieDetails { ...props } /> }
            />
            <Route path="" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
