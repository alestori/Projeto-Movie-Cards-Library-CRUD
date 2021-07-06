import React from 'react';

class Index extends React.Component {
  render() {
    return (
      <h2>Index de filmes</h2>
    );
  }
}

export default Index;
export { default as Loading } from './Loading';
export { default as MovieForm } from './MovieForm';
export { default as MovieCard } from './MovieCard';
