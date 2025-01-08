import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducers/cartReducer';
import { menuSlice } from './reducers/menuReducer';

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});
