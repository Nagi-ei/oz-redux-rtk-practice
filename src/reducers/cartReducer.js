import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) =>
      state.filter((el) => action.payload !== el.id),
  },
});
