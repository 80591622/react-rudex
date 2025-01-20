import { configureStore } from '@reduxjs/toolkit';
import todosReducer  from './todosReducer';
import { Action } from 'redux';
import { thunk, ThunkAction } from 'redux-thunk';

const todosStore = configureStore({
  reducer: todosReducer ,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});

export type RootState = ReturnType<typeof todosStore.getState>;
export type AppDispatch = typeof todosStore.dispatch;
export type AppThunk = ThunkAction<Promise<void>, RootState, unknown, Action<string>>;

export default todosStore;