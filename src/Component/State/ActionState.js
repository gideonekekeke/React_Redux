import { actionType } from "./ActionType";

export const addToCart = (itemID) => {
  return {
    type: actionType.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionType.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustCart = (itemID, value) => {
  return {
    type: actionType.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const viewCart = (itemID) => {
  return {
    type: actionType.VIEW_CART_ITEMS,
    payload: {
      id: itemID,
    },
  };
};

export const addProduct = (item) => {
  return {
    type: actionType.ADD_PRODUCT,
    payload: item,
  };
};
