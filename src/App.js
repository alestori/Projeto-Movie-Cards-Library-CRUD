import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from './pages/index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
