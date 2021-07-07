import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.updateMovies(id);
  }

  updateMovies = async (id) => {
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loading: false,
    });
  }

  deleteMovie = async (id) => {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="movie-infos" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <p>{ genre }</p>
        <p>{ rating }</p>
        <div>
          <Link className="card-button" to="/">VOLTAR</Link>
          <Link className="card-button" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link
            className="card-button"
            to="/"
            onClick={ () => this.deleteMovie(id) }
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
