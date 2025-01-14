import React from "react";
import './todoList.css';
import 'antd/dist/reset.css';
import { Input, Button, List, Avatar } from 'antd';
import useTodoLogic from "./hooks/useTodoLogic";

const TodoList: React.FC = () => {
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
    <div className="todo-list-container">
      <Input
        className="todo-list-input"
        placeholder="Basic usage"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }} />
      <Button className="todo-list-button" type="primary" onClick={handleSubmit}>提交</Button>

      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              editingIndex === index ? (
                <>
                  <Button type="link" onClick={() => handleSave(index)}>确定</Button>
                  <Button type="link" onClick={handleCancel}>取消</Button>
                </>
              ) : (
                <Button type="link" onClick={() => handleEdit(index)}>
                  编辑
                </Button>
              ),
              <Button type="link" onClick={() => handleDelete(index)}>
                删除
              </Button>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={
                editingIndex === index ? (
                  <Input
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}
                  />
                ) :
                <a href="https://ant.design">{item}</a>
              }
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoList;
