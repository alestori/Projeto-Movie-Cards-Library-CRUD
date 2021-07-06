import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id);
    this.saveData();
  }

  handleSubmit(updatedMovie) {
    const { createMovie } = movieAPI;
    createMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
      movie: updatedMovie,
    });
  }

  async saveData() {
    try {
      const { match: { params: { id } } } = this.props;
      const { getMovie } = movieAPI;
      this.setState({
        status: 'done',
        movie: await getMovie(id),
      });
    } catch (e) {
      console.log(e);
    }
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
  match: PropTypes.objectOf(Object).isRequired,
};

export default EditMovie;
