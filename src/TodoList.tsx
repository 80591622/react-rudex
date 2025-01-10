import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './todoList.css';
import 'antd/dist/reset.css';
import { Input, Button, List, Avatar } from 'antd';

// 定义 Redux state 的类型
interface DefaultState {
  inputValue: string;
  list: number[];
}

const TodoList: React.FC = () => {
  const inputValue = useSelector((state: DefaultState) => state.inputValue);
  const list = useSelector((state: DefaultState) => state.list);

  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value });
  }

  return (
    <div className="todo-list-container">
      <Input className="todo-list-input" placeholder="Basic usage" value={inputValue} onChange={handleInputChange}/>
      <Button className="todo-list-button" type="primary">提交</Button>

      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default TodoList;
