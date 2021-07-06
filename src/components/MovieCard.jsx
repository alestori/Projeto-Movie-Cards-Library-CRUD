import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ `Thumbnail de ${title}` } />
        <div className="titles">
          <h1 className="movie-card-title">{title}</h1>
          <h4 className="movie-card-subtitle">{subtitle}</h4>
        </div>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
