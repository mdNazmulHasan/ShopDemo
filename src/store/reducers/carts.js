import {ADD_TO_CART} from '../actions/carts';

const initialState = {
  carts: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const cartState = [...state.carts];
      const existingIndex = cartState.findIndex(
        (data) => data.id === action.cartItem.id,
      );
      if (existingIndex >= 0) {
        const existingData = cartState[existingIndex];
        const existingQuantity = existingData.quantity;
        const updatedQuantity = existingQuantity + 1;
        existingData.quantity = updatedQuantity;
        cartState[existingIndex] = existingData;
      } else {
        const data = action.cartItem;
        data.quantity = 1;
        cartState.push(data);
      }
      return {...state, carts: cartState};
    default:
      return state;
  }
};
export default cartReducer;
