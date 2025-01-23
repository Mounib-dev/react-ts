import React from "react";

import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

// FC is a Generic Type so we can create an Interface or a Type and "feed" it to the FC Gen. Type
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
