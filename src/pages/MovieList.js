import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.callMovieCard = this.callMovieCard.bind(this);
  }

  componentDidMount() {
    getMovies()
      .then((json) => this.setState({
        movies: json,
      }))
      .then(() => this.setState({
        loading: false,
      }));
  }

  callMovieCard() {
    const { movies } = this.state;
    return (
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }

  render() {
    const { loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list" data-testid="movie-list">
        {/* {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)} */}
        { loading ? <Loading /> : this.callMovieCard() }
      </div>
    );
  }
}

export default MovieList;
