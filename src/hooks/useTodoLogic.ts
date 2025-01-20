import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';
import { useState } from "react";
import { Dispatch } from "redux";
import { RootState } from "@/store";
import { fetchTodos } from '@/store/todos/actions';
import { setInputValue, setInputDescValue, addItem, deleteItem, editItem  } from '@/store/todos/actions';

const useTodoLogic = () => {
  const dispatch: Dispatch = useDispatch();
  const inputValue = useSelector((state: { inputValue: string }) => state.inputValue);
  const inputDescValue = useSelector((state: { inputDescValue: string }) => state.inputDescValue);
  const todos = useSelector((state: RootState) => state.todos); 
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedValues, setEditedValues] = useState<{ title: string | number; description: string | number }>({
    title: "",
    description: "",
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    console.log('Todos updated:', todos); // 查看 todos 是否更新
  }, [todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleInputChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputDescValue(e.target.value));
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "" && inputDescValue.trim() !== "") {
      const newItem = {
        id: Math.random(), 
        title: inputValue,
        description: inputDescValue, 
        completed: false,
      };
      dispatch(addItem(newItem)); // 将新项传递给 Redux
      dispatch(setInputValue("")); // 清空输入框
      dispatch(setInputDescValue("")); // 清空输入框
    }
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setEditingIndex(id);
      setEditedValues({ title: todo.title, description: todo.description });
    }
  };

  const handleSave = (id: number) => {
    if (editingIndex === id) {
      dispatch(editItem(id, editedValues.title, editedValues.description ));  // 保存编辑后的数据
      setEditingIndex(null);  // 重置编辑状态
      setEditedValues({ title: "", description: "" });  // 清空编辑值
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditedValues({ title: "", description: "" });
  };

  const handleEditedValueChange = (field: "title" | "description", value: string) => {
    setEditedValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    inputValue,
    inputDescValue,
    todos,
    editingIndex,
    editedValues,
    handleInputChange,
    handleInputChangeDescription,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleSave,
    handleCancel,
    handleEditedValueChange 
  };
};

export default useTodoLogic;
