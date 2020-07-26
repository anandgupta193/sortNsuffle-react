import { SHUFFLE_SUCCESS } from '../actionTypes/ShuffleActionTypes';
import CARDS from '../constants/CardsConstants';
import SORT from '../actionTypes/SortActionTypes';

const defaultState = CARDS;

const shuffleCardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHUFFLE_SUCCESS:
      return action.payload;
    case SORT:
      return defaultState;
    default:
      return state;
  }
};

export default shuffleCardReducer;
