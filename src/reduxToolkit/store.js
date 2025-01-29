import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './slices/cartSlice';

// إعدادات الـ persist
const persistConfig = {
    key: 'root',
    storage, // استخدم التخزين المحلي (localStorage أو sessionStorage)
}

// دمج الـ reducer مع إعدادات الـ persist
const persistedReducer = persistReducer(persistConfig, cartReducer);

// إعداد الـ store مع الـ persistedReducer
const store = configureStore({
  reducer: {
    cart: persistedReducer, // ربط الـ reducer الذي تم تخصيصه بالـ store
  },
});

// إنشاء الـ persistor لتفعيل عملية الـ persistence
const persistor = persistStore(store);

export { store, persistor };
