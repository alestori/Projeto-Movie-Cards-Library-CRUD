import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

export default class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
    this.loadMovieList = this.loadMovieList.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((res) => {
        this.setState({
          loading: false,
          movies: res,
        });
      })
      .catch(() => {this.setState({
        loading: 'Erro ao carregar',
      })})
  }

  loadMovieList() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    return (
      this.state.loading ? <Loading /> : this.loadMovieList()
    );
  }
}

