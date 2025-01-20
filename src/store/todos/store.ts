import { configureStore } from '@reduxjs/toolkit';
import todosReducer  from './todosReducer';
import { thunk } from 'redux-thunk';

const todosStore = configureStore({
  reducer: todosReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});

export type RootState = ReturnType<typeof todosStore.getState>;
export type AppDispatch = typeof todosStore.dispatch;

export default todosStore;