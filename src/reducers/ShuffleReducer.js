import { SHUFFLE_SUCCESS } from '../actionTypes/ShuffleActionTypes';
import CARDS from '../constants/CardsConstants';

const defaultState = CARDS;

const shuffleCardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHUFFLE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default shuffleCardReducer;
