import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
  }

  componentDidMount() {
    this.loadingFunc();
  }

  loadingFunc = async () => {
    const { getMovies } = movieAPI;
    const movies = await getMovies();
    this.setState({
      movies: [...movies],
      load: false,
    });
  }

  render() {
    const { movies, load } = this.state;
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
