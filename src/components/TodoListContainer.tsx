import React from "react";
import TodoList from "./TodoList";
import useTodoLogic from "@/hooks/useTodoLogic";

const TodoListContainer: React.FC = () => {
  const {
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
  } = useTodoLogic();

  return (
    <TodoList
      inputValue={inputValue}
      list={list}
      editingIndex={editingIndex}
      editedValue={editedValue}
      onInputChange={handleInputChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();
        }
      }}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onSave={handleSave}
      onCancel={handleCancel}
      onEditedValueChange={(e) => setEditedValue(e.target.value)}
    />
  );
};

export default TodoListContainer;
