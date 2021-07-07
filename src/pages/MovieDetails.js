import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleClick() {
    this.setState({ shouldRedirect: true });
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const { match: { params: { id } } } = this.props;
      const request = await movieAPI.getMovie(id);
      this.setState({
        movie: request,
        loading: false,
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    if (loading) return <Loading />;

    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            <Link to="/">DELETAR</Link>
          </button>
        </div>
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
