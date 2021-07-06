import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.apiResponse = this.apiResponse.bind(this);

    this.state = {
      movies: [],
      loading: true, // acrescentei isso na monitoria
    };
  }

  componentDidMount() {
    this.apiResponse();
  }

  async apiResponse() {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }
  // async componentDidMount() {
  //   const reponse = await movieAPI.getMovies();
  //   this.setState({
  //     movies: reponse,
  //     loading: false,
  //   });
  // }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    const map = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : map }
      </div>
    );
  }
}

export default MovieList;
