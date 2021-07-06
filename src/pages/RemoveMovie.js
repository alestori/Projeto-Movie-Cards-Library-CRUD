import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class RemoveMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id }} } = this.props;
    
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    return (
      <h1>Removing...</h1>
    );
  }
}

RemoveMovie.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RemoveMovie;
