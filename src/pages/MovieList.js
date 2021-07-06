import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.changeMovies = this.changeMovies.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const fetchedMovies = await getMovies();
    this.changeMovies(fetchedMovies);
  }

  changeMovies(newMovies) {
    this.setState({
      movies: newMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading
          ? (
            <Loading>Carregando...</Loading>
          )
          : (
            <section>
              <div>
                <Link to="/movies/new">ADICIONAR CARTÃO</Link>
              </div>
              { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
            </section>
          )}
      </div>
    );
  }
}

export default MovieList;
