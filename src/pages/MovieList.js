import React, { Component } from 'react';

import { MovieCard, Loading } from '../components';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({movies: response, load: false }));
  }

  render() {
    const { movies, load } = this.state;

    if (load) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
