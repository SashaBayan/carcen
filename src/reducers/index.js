import { combineReducers } from 'redux';
import patients from './patients';
// import matches from './matches';


const rootReducer = combineReducers({
  patients,
  // matches,
});

export default rootReducer;
