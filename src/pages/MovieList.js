import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchApi = this.fetchApi.bind(this);
    this.listBuilder = this.listBuilder.bind(this);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const moviesPromise = await movieAPI.getMovies();
    this.setState({
      movies: moviesPromise,
    });
  }

  listBuilder() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { (movies.length > 0) ? this.listBuilder() : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
