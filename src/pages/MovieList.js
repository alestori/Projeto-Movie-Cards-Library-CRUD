import React from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class MovieList extends React.Component {
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
      .catch(() => {
        this.setState({
          loading: 'Erro ao carregar',
        });
      });
  }

  loadMovieList() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { state: { loading } } = this;
    return (
      loading ? <Loading /> : this.loadMovieList()
    );
  }
}
