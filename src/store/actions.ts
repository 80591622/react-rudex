export const SET_INPUT_VALUE = "SET_INPUT_VALUE";

interface SetInputValueAction {
  type: typeof SET_INPUT_VALUE;
  payload: string;
}

export type TodoActionTypes  = SetInputValueAction;

export const setInputValue = (value: string): TodoActionTypes  => ({
  type: SET_INPUT_VALUE,
  payload: value
});