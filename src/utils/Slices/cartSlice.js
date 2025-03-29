import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
  },
  name: "cart",
  reducers: {
    addCount: (state, action) => {
      state.items.push(action.payload);
    },
    removeCount: (state) => {
      state.pop();
    },
    clearCart: (state) => {
      state.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addCount, removeCount, clearCart } = cartSlice.actions;
