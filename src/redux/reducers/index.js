import { combineReducers } from 'redux';
import importer from './importMovies';
import loader from './loadingScreen';
import redirecter from './redirectTimer';

export const rootReducer = combineReducers({
  importer,
  loader,
  redirecter,
});

export default rootReducer;
