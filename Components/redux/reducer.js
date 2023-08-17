import {ADD_TO_CART} from './constant';

const intialstate = [];
export const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    default:
      return state;
  }
};
