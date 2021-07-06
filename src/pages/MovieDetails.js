import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor({ match }) {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      id: match.params.id,
      movie: {},
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovie() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
    this.setState({
      redirect: true,
    });
    console.log('cheguei');
  }

  async fetchMovie() {
    const { id } = this.state;
    const movieInfo = await movieAPI.getMovie(id);
    this.setState({
      movie: { ...movieInfo },
      loading: false,
    });
  }

  render() {
    const { movie, loading, redirect } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }

    if (redirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{ `Title: ${movie.title}` }</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{`Rating: ${movie.rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        <Link onClick={ this.deleteMovie } to="/">DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
