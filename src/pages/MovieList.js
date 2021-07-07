import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    const moviesList = getMovies();
    moviesList.then((movie) => {
      this.setState((state) => ({
        ...state,
        movies: movie,
        loading: false,
      }));
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
              <section>
                <section>
                  <Link to="/movies/new">ADICIONAR CARTÃO</Link>
                </section>
                <section>
                  { movies.map((movie) => (
                    <MovieCard key={ movie.title } movie={ movie } />
                  ))}
                </section>
              </section>
            )
        }
      </div>
    );
  }
}

export default MovieList;
