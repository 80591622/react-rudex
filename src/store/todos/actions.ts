import { Dispatch } from 'redux';
import { fetchTodosApi } from '@/api/todolist';

export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export const SET_INPUT_DESC_VALUE = "SET_INPUT_DESC_VALUE"
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const SET_TODOS = "SET_TODOS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

interface Action<T extends string, P> {
  type: T;
  payload: P;
}

// 使用泛型定义各个 Action 类型
export type SetInputValueAction = Action<typeof SET_INPUT_VALUE, string>;
export type SetInputDescValueAction = Action<typeof SET_INPUT_DESC_VALUE, string>;
export type AddItemAction = Action<typeof ADD_ITEM, { id: number; title: string; description: string; completed: boolean }>;
export type DeleteItemAction = Action<typeof DELETE_ITEM, number | number[]>;
export type EditItemAction = Action<typeof EDIT_ITEM, { id: number; title: string; description: string; }>;

export type SetTodosAction = Action<typeof SET_TODOS, any[]>;
export type SetLoadingAction = Action<typeof SET_LOADING, boolean>;
export type SetErrorAction = Action<typeof SET_ERROR, string | null>;

// 合并所有 Action 类型
export type TodoActionTypes = SetInputValueAction | SetInputDescValueAction | AddItemAction | DeleteItemAction | EditItemAction | SetTodosAction | SetLoadingAction | SetErrorAction;

// Action creators
export const setInputValue = (value: string): SetInputValueAction => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

export const setInputDescValue = (value: string): SetInputDescValueAction => ({
  type: SET_INPUT_DESC_VALUE,
  payload: value,
});

export const addItem = (item: { id: number; title: string; description: string; completed: boolean }): AddItemAction => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItem = (id: number): DeleteItemAction => ({
  type: DELETE_ITEM,
  payload: id,
});

export const editItem = (id: number, title: string,description: string ) => ({
  type: EDIT_ITEM,
  payload: { id, title, description }
});

// 同步 action
export const setTodos = (todos: any[]) => ({
  type: SET_TODOS,
  payload: todos,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error: string | null) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true)); // 开始加载

    try {
      const response = await fetchTodosApi('/api/todolist'); // 假设有一个获取 todos 的 API
      console.log(response);
      
      dispatch(setTodos(response.data)); // 设置获取的 todos
    } catch (error: any) {
      dispatch(setError(error.message)); // 捕获错误
    } finally {
      dispatch(setLoading(false)); // 请求结束
    }
  };
};
