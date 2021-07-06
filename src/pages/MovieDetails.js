import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

export default class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
    this.loadMovieDetails = this.loadMovieDetails.bind(this);
  }

  componentDidMount() {
    const { props: { match: { params: { id } } } } = this;

    movieAPI.getMovie(id)
      .then((res) => {
        this.setState({
          loading: false,
          movie: res,
        });
      })
      .catch(() => {
        this.setState({
          loading: 'Erro ao carregar',
        });
      });
  }

  loadMovieDetails() {
    const { state:
      { movie:
        { title, storyline, imagePath, genre, rating, subtitle },
      },
    } = this;
    const { props: { match: { params: { id } } } } = this;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
      </div>
    );
  }

  render() {
    const { state: { loading } } = this;
    return (
      loading ? <Loading /> : this.loadMovieDetails()
    );
  }
}

// NAO EH ESSE
MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
