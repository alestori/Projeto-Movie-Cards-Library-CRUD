import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie, key } = this.props;
    const { title } = movie;
    return (
      <div key={ key } data-testid="movie-card">
        {title}
      </div>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
