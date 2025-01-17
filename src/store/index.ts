import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducer";
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;