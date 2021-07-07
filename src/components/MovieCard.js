import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <main>
        <div data-testid="movie-card">
          <h3 data-testid="movie-card-title" className="movie-card-title">{title}</h3>
          <p className="movie-card-storyline">{storyline}</p>
          Movie Card
        </div>
        <div>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </main>
    );
  }
}

export default MovieCard;
