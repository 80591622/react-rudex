import React, { useEffect } from "react";
import TodoList from "@/components/TodoList";
import useTodoLogic from "@/hooks/useTodoLogic";

const TodoListContainer: React.FC = () => {
  const {
    inputValue,
    inputDescValue,
    todos,
    editingIndex,
    editedValues,
    handleInputChange,
    handleInputChangeDescription,
    handleEditedValueChange,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleSave,
    handleCancel,
  } = useTodoLogic();

  return (
    <TodoList
      inputValue={inputValue}
      inputDescValue={inputDescValue}
      todos={todos}
      editingIndex={editingIndex}
      editedValues={{ 
        title: String(editedValues.title), // 确保是字符串类型
        description: String(editedValues.description), // 确保是字符串类型
      }}
      onInputChange={handleInputChange}
      onInputChangeDescription={handleInputChangeDescription}
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
      onEditedValueChange={handleEditedValueChange}
    />
  );
};

export default TodoListContainer;
