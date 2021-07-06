import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movie: [],
      loading: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((result) => this.setState({ movie: result, loading: false }));
  }

  handleDelete() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = {};

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

export default MovieDetails;
