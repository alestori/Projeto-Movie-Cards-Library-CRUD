import React from 'react';

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
    movieAPI.deleteMovie(id).then(() => this.setState({ shouldRedirect: true }));
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

export default RemoveMovie;
