import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      loading: true,
    };
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.handleFetchMovie();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async handleFetchMovie() {
    this.setState({ loading: true },
      async () => {
        const { match: { params: { id } } } = this.props;
        const movie = await movieAPI.getMovie(id);
        const { title, storyline, imagePath, genre, rating, subtitle } = movie;
        if (this.mounted) {
          this.setState({
            title, storyline, imagePath, genre, rating, subtitle, id, loading: false,
          });
        }
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
      <main>
        <div data-testid="movie-details" className="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } className="movie-cover" />
          <div className="titles">
            <h1 className="movie-card-title">{`${title}`}</h1>
            <h4 className="movie-card-subtitle">{ `${subtitle}` }</h4>
          </div>
          <p className="movie-card-storyline">{ `${storyline}` }</p>
          <p>{ `${genre}` }</p>
          <div className="movie-card-rating">
            <p className="rating">{ `${rating}` }</p>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={ this.delete }>DELETAR</Link>
          </div>
        </div>
      </main>
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
