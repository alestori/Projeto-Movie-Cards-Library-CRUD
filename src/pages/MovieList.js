import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import '../css/movieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.markMovie = this.markMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState((state) => ({ ...state, movies: [...movies] }));
  }

  markMovie(bookmarked, id) {
    const { movies } = this.state;
    const bookmarkChanged = movies.find((movie) => Number(movie.id) === Number(id));
    bookmarkChanged.bookmarked = bookmarked;
    movieAPI.updateMovie(bookmarkChanged);
  }

  render() {
    const { movies } = this.state;

    if (!movies.length) return (<Loading />);

    return (
      <div data-testid="movie-list" className="movie-list">
        <Link to="/movies/new" className="movie-link">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
          onClick={ this.markMovie }
        />))}
      </div>
    );
  }
}

export default MovieList;
