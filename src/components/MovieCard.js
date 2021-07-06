import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
