import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartItem } from '@/config/models/CartItem';
import { Product } from '@/config/models/Product';

export interface CartState {
  cartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseItem: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === action.payload.id,
      );
      if (itemIndex < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            {
              product: action.payload,
              quantity: 1,
            },
          ],
        };
      } else {
        const newCartItem = [...state.cartItems];
        const { product, quantity } = newCartItem[itemIndex];
        newCartItem[itemIndex] = { product, quantity: quantity + 1 };
        return { ...state, cartItems: newCartItem };
      }
    },

    decreaseItem: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === action.payload.id,
      );
      const newCartItem = [...state.cartItems];
      const { product, quantity } = newCartItem[itemIndex];
      if (quantity > 1) {
        newCartItem[itemIndex] = { product, quantity: quantity - 1 };
      } else {
        newCartItem.splice(itemIndex, 1);
      }
      return { ...state, cartItems: newCartItem };
    },

    removeItem: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === action.payload.id,
      );
      const newCartItems = [...state.cartItems];
      newCartItems.splice(itemIndex, 1);
      return { ...state, cartItems: newCartItems };
    },

    toggleCartState: (state) => {
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    },
  },
});

export const { increaseItem, decreaseItem, removeItem, toggleCartState } =
  cartSlice.actions;
export default cartSlice.reducer;
