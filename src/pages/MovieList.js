import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    getMovies().then((response) => {
      this.setState({
        movies: response,
        loading: false,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
