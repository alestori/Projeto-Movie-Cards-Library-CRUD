import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.mounted = false; // foi consulta o Stackoverflow para resolver warning e se certificar de que a função assíncrona foi cancelada (source: https://stackoverflow.com/questions/52061476/cancel-all-subscriptions-and-asyncs-in-the-componentwillunmount-method-how)
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.fetchMovie();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    if (this.mounted) {
      this.setState((state) => ({
        ...state,
        movie,
        loading: false,
      }));
    }
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const {
      movie: { title, storyline, imagePath, genre, rating, subtitle, id },
      loading,
    } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="details-button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
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
