import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {
          loading
            ? <Loading />
            : (
              <div>
                <Link to="/movies/new">ADICIONAR CARTÃO</Link>
                {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
              </div>
            )
        }
      </div>
    );
  }
}

export default MovieList;
