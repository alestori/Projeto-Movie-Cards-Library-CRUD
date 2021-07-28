// import { IMPORT_MOVIES } from '../actions';

import { createReducer } from '@reduxjs/toolkit';
// export const importer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case IMPORT_MOVIES:
//     return {
//       ...state,
//       movies: action.movies,
//       loading: action.loading,
//     };
//   default:
//     return state;
//   }
// };

import { importMovies } from '../actions/index';

const INITIAL_STATE = {
  movies: [],
  loading: true,
};

const importer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(importMovies, (state, action) => ({
    ...state,
    movies: action.payload.movies,
  }));
  // builder.addCase(isLoading, (state, action) => ({
  //   ...state,
  //   loading: action.payload.loading,
  // }));
  builder.addDefaultCase((state) => state);
});

export default importer;
