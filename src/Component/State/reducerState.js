import { actionType } from "./ActionType";

const initialState = {
  products: [],

  cart: [],

  currentState: null,
};

export const myShopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_TO_CART:
      const item = state.products.find((el) => el.id === payload.id);
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionType.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id ? { ...item, qty: +payload.qty } : item
        ),
      };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case actionType.VIEW_CART_ITEMS:
      return {
        ...state,
        currentState: payload,
      };

    case actionType.ADD_PRODUCT:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
