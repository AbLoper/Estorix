import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
            // console.log('item added: ', action.payload);
            // console.log('cart items: ', state.items);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            // console.log('item Deleted: ', itemDeleted);
            // console.log('cart items: ', state.items);
        },
        incrementItem: (state) => {
            // state.items.
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;