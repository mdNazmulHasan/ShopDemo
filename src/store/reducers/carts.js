import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from '../actions/carts';

const initialState = {
  carts: [],
};
const cartReducer = (state = initialState, action) => {
  const cartState = [...state.carts];
  switch (action.type) {
    case ADD_TO_CART:
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
    case INCREASE_QUANTITY:
      const indexForIncrease = cartState.findIndex(
        (data) => data.id === action.itemId,
      );
      if (indexForIncrease >= 0) {
        const existingData = cartState[indexForIncrease];
        const existingQuantity = existingData.quantity;
        const updatedQuantity = existingQuantity + 1;
        existingData.quantity = updatedQuantity;
        cartState[indexForIncrease] = existingData;
      }
      return {...state, carts: cartState};
    case DECREASE_QUANTITY:
      const indexForDecrease = cartState.findIndex(
        (data) => data.id === action.itemId,
      );
      if (indexForDecrease >= 0) {
        const existingData = cartState[indexForDecrease];
        const existingQuantity = existingData.quantity;
        const updatedQuantity = existingQuantity - 1;
        existingData.quantity = updatedQuantity;
        cartState[indexForDecrease] = existingData;
      }
      return {...state, carts: cartState};
    default:
      return state;
  }
};
export default cartReducer;
