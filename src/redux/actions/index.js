// export const IMPORT_MOVIES = 'IMPORT_MOVIES';
// export const importMovies = (movies, loading) => ({
//   type: IMPORT_MOVIES,
//   movies,
//   loading,
// });
import { createAction } from '@reduxjs/toolkit';

export const importMovies = createAction('IMPORT_MOVIES', (movies, loading) => ({
  payload: {
    movies,
    loading,
  },
}));

export const isLoading = createAction('IS_LOADING', (loading) => ({
  payload: {
    loading,
  },
}));
