import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
  }

  // solução para warning:
  // https://www.akashmittal.com/cant-perform-react-state-update-unmounted-component/
  componentDidMount() {
    this.mounted = true;
    this.handleFetchMovie();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  handleFetchMovie() {
    this.setState({ loading: true }, async () => {
      const { match: { params: { id } } } = this.props;
      const movie = await movieAPI.getMovie(id);
      if (this.mounted) {
        this.setState({ movie, loading: false });
      }
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (loading) {
      // render Loading
      return <Loading />;
    }

    const { match: { params: { id } } } = this.props;
    return (
      <div data-testid="edit-movie">
        <MovieForm
          movie={ movie }
          onSubmit={ this.handleSubmit }
          destination={ `/movies/${id}` }
        />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
