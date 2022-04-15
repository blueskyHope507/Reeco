import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import orderReducer from './orderSlice';
import productsReducer from './productsSlice';

const store = configureStore({
  reducer: {
    orderState: orderReducer,
    productsState: productsReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;