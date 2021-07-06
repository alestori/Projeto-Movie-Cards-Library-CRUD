import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // handleSubmit(updatedMovie) {
  // }

  async fetchMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    return (
      <div data-testid="edit-movie">
        {
          loading
            ? <Loading /> : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
