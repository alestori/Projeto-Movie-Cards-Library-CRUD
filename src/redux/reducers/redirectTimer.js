import { createReducer } from '@reduxjs/toolkit';
import { shouldRedirect } from '../actions';

const INITIAL_STATE = {
  redirect: false,
};

const redirecter = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(shouldRedirect, (state, action) => ({
    ...state,
    redirect: action.payload.redirect,
  }));
});

export default redirecter;
