import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fakeFetch = this.fakeFetch.bind(this);
  }

  componentDidMount() {
    this.fakeFetch();
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: updatedMovie, shouldRedirect: true });
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

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
