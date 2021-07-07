import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.getMovie = this.getMovie.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { loading: true },
      async () => {
        const movieRequest = await movieAPI.getMovie(id);
        console.log(movieRequest);
        this.setState({
          loading: false,
          movie: movieRequest,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, subtitle, storyline, imagePath, genre, rating } = movie;

    return (
      <div>
        { loading ? (
          <Loading />
        ) : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <div>
              <h4>{ `Title: ${title}` }</h4>
              <h5>{ `Subtitle: ${subtitle}` }</h5>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
            </div>
            <div>
              <p>{ `Rating: ${rating}` }</p>
            </div>
            <div>
              <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
