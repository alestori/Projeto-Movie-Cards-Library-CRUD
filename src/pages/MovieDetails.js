import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };

    this.fakeFetch = this.fakeFetch.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.fakeFetch();
  }

  async fakeFetch() {
    const { match: { params: { id } } } = this.props;
    this.setState(
      { loading: true },
      async () => {
        const movie = await movieAPI.getMovie(id);
        this.setState({ movie, loading: false });
      },
    );
  }

  delete() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match: { params: { id } } } = this.props;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button" onClick={ this.delete }><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
  match: PropTypes.objectOf(Object).isRequired,
};
