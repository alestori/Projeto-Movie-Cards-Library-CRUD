import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovie();
  }

  async handleFetchMovie() {
    const importedMovies = await movieAPI.getMovies();
    this.setState({
      movies: importedMovies,
      loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
