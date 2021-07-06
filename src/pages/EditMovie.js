import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.fetchToEdit = this.fetchToEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({
      status: 'loading',
    }, () => this.fetchToEdit(updatedMovie));
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movieObj = await movieAPI.getMovie(id);
    this.setState({
      movie: movieObj,
      status: undefined,
    });
  }

  async fetchToEdit(update) {
    await movieAPI.updateMovie(update);
    this.setState({
      status: undefined,
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
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
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};

export default EditMovie;
