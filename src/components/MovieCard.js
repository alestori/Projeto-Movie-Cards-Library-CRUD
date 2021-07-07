import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div className="card movie-card-image" data-testid="movie-card">
        <img className="card-img-top" alt="..." src={ imagePath } />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-title">{subtitle}</h5>
          <p className="card-text">{storyline}</p>
          <Link to={ `/movies/${id}` } className="btn btn-primary">VER DETALHES</Link>
        </div>
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
