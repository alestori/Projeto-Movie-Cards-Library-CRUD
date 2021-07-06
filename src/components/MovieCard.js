import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;

    return (
      <div data-testid="movie-card">
        <section>
          <img src={ imagePath } alt={ `Capa do filme ${title}` } />
        </section>
        <section>
          <h1>{ title }</h1>
        </section>
        <section>
          <h5>{ storyline }</h5>
        </section>
        <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
