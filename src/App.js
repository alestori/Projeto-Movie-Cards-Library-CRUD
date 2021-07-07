import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route path="/:notfound" render={ (props) => <NotFound { ...props } /> } />
        <Route path="/" render={ (props) => <MovieList { ...props } /> } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
