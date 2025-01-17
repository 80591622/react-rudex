import React from "react";
import { Input, Button, List, Avatar } from "antd";
import "@/styles/todo-list.css"

interface TodoListProps {
  inputValue: string;
  inputDescValue: string;
  todos:  { id: number; title: string; description: string; completed: boolean }[];
  editingIndex: number | null;
  editedValues: { title: string; description: string };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChangeDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  onSave: (index: number) => void;
  onCancel: () => void;
  onEditedValueChange: (field: "title" | "description", value: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  inputValue,
  todos,
  editingIndex,
  editedValues,
  inputDescValue,
  onInputChange,
  onInputChangeDescription,
  onKeyDown,
  onSubmit,
  onDelete,
  onEdit,
  onSave,
  onCancel,
  onEditedValueChange,
}) => {
  return (
    <div className="todo-list-container">
      <Input
        className="todo-list-input"
        placeholder="Basic usage"
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />

      <Input
        className="todo-list-input"
        placeholder="Enter task description"
        value={inputDescValue}
        onChange={onInputChangeDescription}
      />

      <Button className="todo-list-button" type="primary" onClick={onSubmit}>
        提交
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              editingIndex === item.id ? (
                <>
                  <Button type="link" onClick={() => onSave(item.id)}>
                    确定
                  </Button>
                  <Button type="link" onClick={onCancel}>
                    取消
                  </Button>
                </>
              ) : (
                <Button type="link" onClick={() => onEdit(item.id)}>
                  编辑
                </Button>
              ),
              <Button type="link" onClick={() => onDelete(item.id)}>
                删除
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={
                editingIndex === item.id ? (
                  <Input value={editedValues.title} onChange={(e) => onEditedValueChange("title", e.target.value)} />
                ) : (
                  <a href="https://ant.design">{item.title}</a>
                )
              }
              description={
                editingIndex === item.id ? (
                  <Input
                    value={editedValues.description}
                    onChange={(e) => onEditedValueChange("description", e.target.value)}
                  />
                ) : (
                  item.description
                )
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
