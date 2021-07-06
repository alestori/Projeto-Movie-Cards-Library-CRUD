import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
    this.showMovies = this.showMovies.bind(this);
  }

  componentDidMount() {
    this.showMovies();
  }

  async showMovies() {
    try {
      const { match: { params: { id } } } = this.props;
      const response = await movieAPI.getMovie(id);
      this.setState({
        isLoading: false,
        movies: response,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // Change the condition to check the state
    const { movies, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-details" className="movie-card-2">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="links">
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
