import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import { getMovies } from '../services/movieAPI';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies().then((r) => this.setState({ movies: [...r] }));
  }

  shouldComponentUpdate() {
    const { movies } = this.state;
    if (movies.length <= 0) {
      return <Loading />;
    }
    return true;
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {this.shouldComponentUpdate()}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
