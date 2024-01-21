import Todo from "./Todo";

// import { useState } from "react";
interface TodoObject {
  name: string;
  important?: boolean;
}
interface TodoProps {
  todoArray: TodoObject[];
}

const TodoContainer: React.FC<TodoProps> = ({ todoArray }) => {
  return (
    <ul className="text-xl flex flex-col gap-2">
      {todoArray.map((item, i) => (
        <Todo key={i} {...item} /> // can not grasp how this works, if I put item={item} i get a error
      ))}
    </ul>
  );
};

export default TodoContainer;
