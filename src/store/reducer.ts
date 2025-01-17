import { TodoActionTypes, SET_INPUT_VALUE, SET_INPUT_DESC_VALUE, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, EDIT_DESC_ITEM } from './actions';
import { SET_TODOS, SET_LOADING, SET_ERROR } from './actions';
interface DefaultState {
  inputValue: string;
  inputDescValue: string;
  todos?: Array<{ id: number; title: string; description: string; completed: boolean }>;
  loading?: boolean;
  error?: string | null;
}

const defaultState: DefaultState = {
  inputValue: '',
  inputDescValue: '',
  todos: []
};

const reducer = (state: DefaultState = defaultState, action: TodoActionTypes): DefaultState => {
  console.log(action, state, "==========================>");
  
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    case SET_INPUT_DESC_VALUE:
      return {
        ...state,
        inputDescValue: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        todos: [...(state.todos ?? []), action.payload]
      }
    case DELETE_ITEM:
      return {
        ...state,
        todos:  (state.todos ?? []).filter((_, id) => id !== action.payload)
      }
    case EDIT_ITEM:
      return {
        ...state,
        todos: (state.todos ?? []).map(item =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title } // 允许 value 为 string 或 number
            : item
        )
      }
      case EDIT_DESC_ITEM:
        return {
          ...state,
          todos: (state.todos ?? []).map(item =>
            item.id === action.payload.id
              ? { ...item, title: action.payload.description } // 允许 value 为 string 或 number
              : item
          )
        }
      case SET_TODOS:
        return {
          ...state,
          todos: action.payload,
        };
      case SET_LOADING:
        return {
          ...state,
          loading: action.payload,
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;