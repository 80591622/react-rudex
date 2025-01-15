import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Dispatch } from "redux";
import { setInputValue, addItem, deleteItem, editItem, TodoActionTypes  } from '@/store/actions';

const useTodoLogic = () => {
  const dispatch: Dispatch<TodoActionTypes> = useDispatch();
  const inputValue = useSelector((state: { inputValue: string }) => state.inputValue);
  const list = useSelector((state: { list: (string | number)[] }) => state.list);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string | number>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
      dispatch(setInputValue(""));
    }
  };

  const handleDelete = (index: number) => {
    dispatch(deleteItem(index));
  };

  const handleEdit = (index: number) => {
    setEditedValue(list[index]);
    setEditingIndex(index);
  };

  const handleSave = (index: number) => {
    if (editedValue !== "") {
      dispatch(editItem(index, editedValue));
      setEditingIndex(null);
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return {
    inputValue,
    list,
    editingIndex,
    editedValue,
    setEditedValue,
    handleInputChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleSave,
    handleCancel,
  };
};

export default useTodoLogic;
