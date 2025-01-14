import { createSlice } from "@reduxjs/toolkit";

// قم بتسمية الـ slice بشكل دقيق أكثر
export const cartSlice = createSlice({
    name: 'cart',  // يمكن تسميته "cart" بدلاً من "cartProducts"
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);  // إضافة عنصر إلى سلة التسوق
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);  // إزالة عنصر من سلة التسوق
            }
        },
    }
});

// تصدير الـ actions والـ reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
