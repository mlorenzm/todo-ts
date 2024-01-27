import Todo from "./Todo";
import TodoType from "../TodoType";
// import { useState } from "react";

type TodoContainerProps = {
  todos: TodoType[];
};
const TodoContainer: React.FC<TodoContainerProps> = (todos) => {
  return (
    <ul className="text-xl flex flex-col gap-2">
      {todos.todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </ul>
  );
};

export default TodoContainer;
