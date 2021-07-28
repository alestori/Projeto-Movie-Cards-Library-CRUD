import { combineReducers } from 'redux';
import importer from './importMovies';
import loader from './loadingScreen';

export const rootReducer = combineReducers({ importer, loader });
export default rootReducer;
