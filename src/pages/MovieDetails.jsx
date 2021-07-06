import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, movie: '' };
  }

  componentDidMount() {
    this.setMovie();
  }

  setMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const getMovie = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie: getMovie });
  }

  deleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    const { match: { params: { id } } } = this.props;
    if (loading) { return <Loading />; }
    return (
      <div data-testid="movie-details">
        {/* { loading && <Loading /> } */}
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{ movie.title }</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
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
