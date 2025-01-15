import React from "react";
import { Input, Button, List, Avatar } from "antd";
import "@/styles/todo-list.css"

interface TodoListProps {
  inputValue: string;
  list: (string | number)[];
  editingIndex: number | null;
  editedValue: string | number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
  onSave: (index: number) => void;
  onCancel: () => void;
  onEditedValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  inputValue,
  list,
  editingIndex,
  editedValue,
  onInputChange,
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
      <Button className="todo-list-button" type="primary" onClick={onSubmit}>
        提交
      </Button>

      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              editingIndex === index ? (
                <>
                  <Button type="link" onClick={() => onSave(index)}>
                    确定
                  </Button>
                  <Button type="link" onClick={onCancel}>
                    取消
                  </Button>
                </>
              ) : (
                <Button type="link" onClick={() => onEdit(index)}>
                  编辑
                </Button>
              ),
              <Button type="link" onClick={() => onDelete(index)}>
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
                editingIndex === index ? (
                  <Input value={editedValue} onChange={onEditedValueChange} />
                ) : (
                  <a href="https://ant.design">{item}</a>
                )
              }
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
