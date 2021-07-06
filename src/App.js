import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="" component={ NotFound } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
