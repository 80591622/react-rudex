import { TodoActionTypes, SET_INPUT_VALUE } from './actions';

interface DefaultState {
  inputValue: string;
  list: number[];
}

const defaultState: DefaultState = {
  inputValue: '',
  list: [1, 2, 3]
};

const reducer = (state: DefaultState = defaultState, action: TodoActionTypes): DefaultState => {
  console.log(action, state, "==========================>");
  
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;