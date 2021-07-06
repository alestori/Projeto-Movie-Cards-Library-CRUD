import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.showMovies = this.showMovies.bind(this);
  }

  componentDidMount() {
    this.showMovies();
  }

  async showMovies() {
    try {
      const response = await movieAPI.getMovies();
      this.setState({
        isLoading: false,
        movies: response,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening
    // if (isLoading) return <Loading />
    return (
      <div data-testid="movie-list" className="movie-list">
        {
          (isLoading) ? <Loading />
            : movies
              .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}

export default MovieList;
