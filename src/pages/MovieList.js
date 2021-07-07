import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    this.setState(
      { loading: true },
      async () => {
        const moviesRequest = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesRequest,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        { loading ? (
          <Loading />
        ) : (
          <>
            <div className="movie-list" data-testid="movie-list">
              {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
            </div>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </>
        )}
      </div>
    );
  }
}

export default MovieList;
