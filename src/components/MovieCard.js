import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, subtitle, rating, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Movie Screen" />
        <div>
          <div>
            <h1>{ title }</h1>
            <h3>{ subtitle }</h3>
            <p>{ storyline }</p>
            <p>{ rating }</p>
          </div>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
  }).isRequired,
};
