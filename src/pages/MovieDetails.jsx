import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovie();
  }

  async handleFetchMovie() {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        const { title, storyline, imagePath, genre, rating, subtitle } = movie;
        this.setState({
          title, storyline, imagePath, genre, rating, subtitle, id, loading: false,
        });
      });
  }

  delete() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`title: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.delete }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
