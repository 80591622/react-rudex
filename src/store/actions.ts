export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

// 定义基础 Action 接口
interface Action<T extends string, P> {
  type: T;
  payload: P;
}

// 使用泛型定义各个 Action 类型
export type SetInputValueAction = Action<typeof SET_INPUT_VALUE, string>;
export type AddItemAction = Action<typeof ADD_ITEM,number | string>;
export type DeleteItemAction = Action<typeof DELETE_ITEM, number | number[]>;
export type EditItemAction = Action<typeof EDIT_ITEM, { index: number; value: string | number }>;

// 合并所有 Action 类型
export type TodoActionTypes = SetInputValueAction | AddItemAction | DeleteItemAction | EditItemAction;

// Action creators
export const setInputValue = (value: string): SetInputValueAction => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

export const addItem = (items: number | string): AddItemAction => ({
  type: ADD_ITEM,
  payload: items,
});

export const deleteItem = (index: number | number[]): DeleteItemAction => ({
  type: DELETE_ITEM,
  payload: index,
});

export const editItem = (index: number, value: string | number): EditItemAction => ({
  type: EDIT_ITEM,
  payload: {index, value},
});
