import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={`${title} image`} />
        <h3>{title} </h3>
        <p>{storyline} </p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
