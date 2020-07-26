import { combineReducers } from 'redux';
import shuffledCards from './ShuffleReducer';

const rootReducer = combineReducers({
  shuffledCards,
});

export default rootReducer;
