// CartSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    additem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If item already exists, increase quantity
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        // Add new item with default quantity = 1
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },

    // Remove item from cart
    removeitem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;

        // Optional: remove item if quantity becomes 0
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== id
          );
        }
      }
    },
  },
});

export const { additem, removeitem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;