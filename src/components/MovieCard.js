import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { title, storyline, imagePath },
    } = this.props;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <p>{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
