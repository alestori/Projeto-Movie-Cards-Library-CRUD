import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props;

    return (
      <div data-testid="movie-card">
        <div>
          <img src={ imagePath } alt={ title } />
          <h2>{title}</h2>
        </div>
        <div>
          <p>{storyline}</p>
        </div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};
