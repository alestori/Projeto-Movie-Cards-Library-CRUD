import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { importMovies } from '../redux/actions';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovie();
  }

  async handleFetchMovie() {
    const importedMovies = await movieAPI.getMovies();
    const { importer } = this.props;
    importer(importedMovies, false);
  }

  render() {
    const { movies, loading } = this.props;

    // Render Loading here if the request is still happening
    if (loading) return <Loading />;

    return (
      <main>
        <Link
          to="/movies/new"
          className="add button"
          style={ { textDecoration: 'none' } }
        >
          ADICIONAR CARTÃO
        </Link>
        <div data-testid="movie-list" className="movie-list">
          {movies[0].map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  importer: (movies, loading) => dispatch(importMovies(movies, loading)),
});

const mapStateToProps = (state) => ({
  movies: state.importer.movies,
  loading: state.importer.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

MovieList.propTypes = {
  importer: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
