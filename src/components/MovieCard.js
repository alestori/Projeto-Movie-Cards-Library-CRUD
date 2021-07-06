import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ movie.imagePath} alt={ `${movie.title} cover`}/>
        <div className="movie-card-text">
          <h4>{ movie.title }</h4>
          <p> { movie.storyline }</p>
        </div>
        <Link className="movie-card-details" to={ `/movies/${movie.id}` }>Mais Detalhes!</Link>
                
      </div>
    );
  }
}

export default MovieCard;
