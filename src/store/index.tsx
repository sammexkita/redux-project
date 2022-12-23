import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";

import { ICartState } from "./modules/cart/types";

export interface IState {
  cart: ICartState;
};

const store = configureStore({
  reducer: rootReducer
});

export default store;