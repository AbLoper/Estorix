import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'; // تأكد من تصدير الـ reducer بشكل صحيح

const store = configureStore({
    reducer: {
        cart: cartReducer,  // استخدم الـ reducer المستورد
    }
});

export default store;
