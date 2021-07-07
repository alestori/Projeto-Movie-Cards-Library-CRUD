import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    console.log('NotFound');
    return <div data-testid="404-error">Página não encontrada</div>;
  }
}

export default NotFound;
