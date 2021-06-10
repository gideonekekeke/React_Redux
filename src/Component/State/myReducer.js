import { myShopReducer } from "./reducerState";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  shop: myShopReducer,
});
