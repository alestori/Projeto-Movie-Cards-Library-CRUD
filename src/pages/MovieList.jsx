import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { importMovies, isLoading } from '../redux/actions';
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
    const { importer, loader } = this.props;
    loader(true);
    const importedMovies = await movieAPI.getMovies();
    importer(importedMovies);
    loader(false);
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
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  importer: (movies) => dispatch(importMovies(movies)),
  loader: (loading) => dispatch(isLoading(loading)),
});

const mapStateToProps = (state) => ({
  movies: state.importer.movies,
  loading: state.loader.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

MovieList.propTypes = {
  importer: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
