import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      sholdRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    this.fetchNewMovie(newMovie);
    this.setState({
      sholdRedirect: true,
    });
  }

  async fetchNewMovie(newMovie) {
    await movieAPI.createMovie(newMovie);
  }

  render() {
    const { sholdRedirect } = this.state;

    if (sholdRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
