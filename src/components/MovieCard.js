import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <div className="movie-card-body">
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-subtitle">
            {`Subtitle: ${subtitle}`}
          </p>
          <p className="movie-card-storyline">
            {`Storyline: ${storyline}`}
            <span />
          </p>
        </div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
