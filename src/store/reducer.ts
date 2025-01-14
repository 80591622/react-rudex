import { TodoActionTypes, SET_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './actions';

interface DefaultState {
  inputValue: string;
  list: (string | number)[];
}

const defaultState: DefaultState = {
  inputValue: '',
  list: []
};

const reducer = (state: DefaultState = defaultState, action: TodoActionTypes): DefaultState => {
  console.log(action, state, "==========================>");
  
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.payload)
      }
    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map((item, index) => {
          return index === action.payload.index ? action.payload.value : item
        })
      }
    default:
      return state;
  }
};

export default reducer;