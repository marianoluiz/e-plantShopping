import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalCartQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);

        if(existingItem) {
            existingItem.quantity++;
        } else {
            state.items.push({name, image, cost, quantity: 1});
        }

        state.totalCartQuantity++;

    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);

        state.totalCartQuantity--;
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;

        const itemToUpdate = state.items.find(item => item.name === name);
        
        if (itemToUpdate) {
            /* ur gonna add it to new qty minus the old qty (which means u get the what u added or subtracted.. eg 1 or -1)*/
            state.totalCartQuantity += (quantity - itemToUpdate.quantity);
            itemToUpdate.quantity = quantity;
        }

        
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
