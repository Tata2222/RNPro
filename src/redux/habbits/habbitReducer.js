import {CREATE_HABBIT} from './types';

const initialStore = {
  habbits: [],
};

export const habbitReducer = (state = initialStore, action) => {
  switch (action.type) {
    case CREATE_HABBIT: {
      return {...state, habbits: [...state.habbits, action.payload]};
    }
    default:
      return state;
  }
};
