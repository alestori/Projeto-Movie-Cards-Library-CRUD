import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  constructor({ movie }) {
    super();
    this.state = {
      title: movie.title,
      storyline: movie.storyline,
      id: movie.id,
    };
  }

  render() {
    const { title, storyline, id } = this.state;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
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
