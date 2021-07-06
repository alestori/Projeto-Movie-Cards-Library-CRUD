import React, { Component } from 'react';
import loadGif from '../images/loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className="loading-style">
        <img src={ loadGif } alt="loading" />
        <span hidden>Carregando...</span>
      </div>
    );
  }
}

export default Loading;
