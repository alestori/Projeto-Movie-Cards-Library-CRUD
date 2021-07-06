import React, { Component } from 'react';
import './MovieDetails.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovieFromApi();
  }

  async getMovieFromApi() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);

    this.setState({
      movie: response,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details" className="movie-details">
        <img
          className="movie-details-image"
          alt="Movie Cover"
          src={ `../${imagePath}` }
        />
        <div className="movie-details-body">
          <p className="movie-details-title">{ title }</p>
          <p className="movie-details-subtitle">{ subtitle }</p>
          <p className="movie-details-storyline">{ storyline }</p>
          <p className="">{ genre.toUpperCase() }</p>
          <p className="rating">{ rating }</p>
        </div>
        <div className="movie-details-links">
          <Link to="/movies/:id/edit">EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
