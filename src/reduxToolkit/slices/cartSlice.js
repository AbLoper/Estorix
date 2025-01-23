import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // المصفوفة التي تحتوي على المنتجات
  },
  reducers: {
    // إضافة عنصر إلى السلة
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // إذا كان المنتج موجودًا بالفعل، زيادة الكمية
        existingItem.quantity += 1;
      } else {
        // إذا كان المنتج غير موجود، إضافته إلى السلة مع الكمية 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // إزالة عنصر من السلة
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    // زيادة الكمية لمنتج موجود في السلة
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    // تقليص الكمية لمنتج موجود في السلة
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;
