import React, { Component } from 'react';
import './MovieDetails.css';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  deleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
    this.setState({ shouldRedirect: true });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie });
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) return <Loading />;

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details" className="movieDetails">
        <img className="divImage" alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ title }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="divLinks">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
