import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, id } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt={ `Capa do filme: ${title}` }
        />
        <h2 className="movie-card-title">{title}</h2>
        <h4 className="movie-card-subtitle">{subtitle}</h4>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(Object).isRequired,
};

export default MovieCard;
