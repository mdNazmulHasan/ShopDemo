export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (item) => {
  return {type: ADD_TO_CART, cartItem: item};
};