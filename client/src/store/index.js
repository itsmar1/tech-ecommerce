import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import productsSlice from './products-slice';
import authSlice from './auth-slice';
import uiSlice from './ui-slice';

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const cartPersistConfig = {
    key: 'cart',
    version: 1,
    storage,
  }

  const cartReducer = persistReducer(cartPersistConfig, cartSlice.reducer);



const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsSlice.reducer,
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export default store;