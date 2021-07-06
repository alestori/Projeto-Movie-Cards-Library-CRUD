import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getMovie, updateMovie } from '../services/movieAPI';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMovie(id).then((response) => {
      this.setState({
        movie: response,
        loading: false,
      });
    });
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return <Redirect to="/" />;
    }

    if (loading === true) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
