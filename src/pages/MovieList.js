import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.List = this.List.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.List();
  }

  async List() {
    const rende = await movieAPI.getMovies();
    this.setState({
      movies: rende,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

export default MovieList;
