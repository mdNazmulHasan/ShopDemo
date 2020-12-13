import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from '../actions/carts';

const initialState = {
  carts: [],
  subtotalPrice: 0,
  totalPrice: 0,
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
      const subtotalPrice = cartState.reduce((total, currentValue) => {
        return total + currentValue.price * currentValue.quantity;
      }, 0);
      const discountPrice = (subtotalPrice * 5) / 100;
      const totalPrice = subtotalPrice - discountPrice + 10;

      return {
        ...state,
        carts: cartState,
        subtotalPrice,
        totalPrice,
      };
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
      const subtotalPriceAfterIncrement = cartState.reduce(
        (total = 0, currentValue) => {
          return total + currentValue.price * currentValue.quantity;
        },
        0,
      );

      const discountPriceAfterIncrement =
        (subtotalPriceAfterIncrement * 5) / 100;
      const totalPriceAfterIncrement =
        subtotalPriceAfterIncrement - discountPriceAfterIncrement + 10;

      return {
        ...state,
        carts: cartState,
        subtotalPrice: subtotalPriceAfterIncrement,
        totalPrice: totalPriceAfterIncrement,
      };
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
      const subtotalPriceAfterDecrement = cartState.reduce(
        (total, currentValue) => {
          return total + currentValue.price * currentValue.quantity;
        },
        0,
      );
      const discountPriceAfterDecrement =
        (subtotalPriceAfterDecrement * 5) / 100;
      const totalPriceAfterDecrement =
        subtotalPriceAfterDecrement - discountPriceAfterDecrement + 10;

      return {
        ...state,
        carts: cartState,
        subtotalPrice: subtotalPriceAfterDecrement,
        totalPrice: totalPriceAfterDecrement,
      };
    case REMOVE_ITEM:
      const removedCartState = cartState.filter(
        (data) => data.id !== action.itemId,
      );
      const subtotalPriceAfterRemoveItem = removedCartState.reduce(
        (total, currentValue) => {
          return total + currentValue.price * currentValue.quantity;
        },
        0,
      );
      const discountPriceAfterRemoveItem =
        (subtotalPriceAfterRemoveItem * 5) / 100;
      const totalPriceAfterRemoveItem =
        subtotalPriceAfterRemoveItem - discountPriceAfterRemoveItem + 10;

      return {
        ...state,
        carts: removedCartState,
        subtotalPrice: subtotalPriceAfterRemoveItem,
        totalPrice: totalPriceAfterRemoveItem,
      };
    default:
      return state;
  }
};
export default cartReducer;
