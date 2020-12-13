export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addToCart = (item) => {
  return {type: ADD_TO_CART, cartItem: item};
};
export const increaseQuantity = (id) => {
  return {type: INCREASE_QUANTITY, itemId: id};
};
export const decreaseQuantity = (id) => {
  return {type: DECREASE_QUANTITY, itemId: id};
};
export const removeItem = (id) => {
  return {type: REMOVE_ITEM, itemId: id};
};
