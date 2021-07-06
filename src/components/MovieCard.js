import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id,
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
    } = movie;
    return (
      <div data-testid="movie-card" className="movie-container">
        <img src={ imagePath } alt="foto do filme" />
        <h3>
          {title}
        </h3>
        <h4>
          {subtitle}
        </h4>
        <p>
          {storyline}
        </p>
        <p>
          {rating}
        </p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
