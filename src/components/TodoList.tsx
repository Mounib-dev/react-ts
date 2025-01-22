import React from "react";

interface TodoListProps {
  items: { id: string; text: string }[];
}

// FC is a Generic Type so we can create an Interface or a Type and "feed" it to the FC Gen. Type
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
