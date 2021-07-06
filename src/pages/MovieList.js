import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMoviesFromApi();
  }

  async getMoviesFromApi() {
    const response = await movieAPI.getMovies();

    this.setState((prevState) => ({
      movies: [...prevState.movies, ...response],
    }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">
        {
          movies.length >= 1
            ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
            : <Loading />
        }
      </div>
    );
  }
}

export default MovieList;
