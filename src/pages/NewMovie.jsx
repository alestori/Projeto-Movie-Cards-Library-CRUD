import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { shouldRedirect } from '../redux/actions';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   shouldRedirect: false,
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    const { redirecter } = this.props;
    redirecter(true);
    // this.setState({ shouldRedirect: true });
  }

  render() {
    const { redirect } = this.props;

    if (redirect) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } destination="/" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.redirecter.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  redirecter: (boolean) => dispatch(shouldRedirect(boolean)),
});

NewMovie.propTypes = {
  redirect: PropTypes.bool.isRequired,
  redirecter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMovie);
