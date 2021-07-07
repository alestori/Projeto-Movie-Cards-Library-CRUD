import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  // by Rodrigo_Merlone
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ `Thumbnail de ${title}` } />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
