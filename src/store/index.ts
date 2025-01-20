import { combineReducers } from 'redux';
import todosStore from './todos/store';

const rootReducer = combineReducers({
  todosStore
});

export default rootReducer;