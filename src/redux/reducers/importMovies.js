import { IMPORT_MOVIES } from '../actions';

const INITIAL_STATE = {
  movies: [],
  loading: true,
};

export const importer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IMPORT_MOVIES:
    return {
      ...state,
      movies: [...state.movies, action.movies],
      loading: action.loading,
    };
  default:
    return state;
  }
};

export default importer;
