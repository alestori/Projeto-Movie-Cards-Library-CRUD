import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img />
        <div>
          <h4>{ movie.title }</h4>
          <h5> { movie.subtitle }</h5>
          <p> { movie.storyline }</p>
        </div>
        
      </div>
    );
  }
}

export default MovieCard;
