import { createReducer } from '@reduxjs/toolkit';
import { isLoading } from '../actions/index';

const INITIAL_STATE = {
  loading: true,
};

const loader = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(isLoading, (state, action) => ({
    ...state,
    loading: action.payload.loading,
  }));
});

export default loader;
