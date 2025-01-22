import React from "react";

import TodoList from "./components/TodoList";
const todos = [{ id: "t1", text: "Learn React and TypeScript" }];
// FC Type is a Function Component
const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <TodoList items={todos} />
      </div>
    </>
  );
};

export default App;
