import {ADD_TO_CART} from '../actions/carts';

const initialState = {
  carts: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingCartState = [...state.carts];
      existingCartState.push(action.cartItem);
      return {...state, carts: existingCartState};
    default:
      return state;
  }
};
export default cartReducer;
