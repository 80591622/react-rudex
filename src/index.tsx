import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./store";
import TodoListContainer from '~components/TodoListContainer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoListContainer />
    </Provider>
</React.StrictMode>
);

