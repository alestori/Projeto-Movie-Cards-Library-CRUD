import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.getMovie = this.getMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovie();
  }

  async handleSubmit(updatedMovie) {
    const movieUpdate = await movieAPI.updateMovie(updatedMovie);
    if (movieUpdate === 'OK') this.setState({ shouldRedirect: true });
  }

  async getMovie() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState(
      { status: 'loading' },
      async () => {
        const movieRequest = await movieAPI.getMovie(id);
        this.setState({
          status: '',
          movie: movieRequest,
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
