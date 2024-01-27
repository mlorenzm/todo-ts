import { useState } from "react";
import TodoType from "../TodoType";

const Todo = (item: TodoType) => {
  const [finished, setFinished] = useState(false);
  const handleChange = () => {
    finished ? setFinished(false) : setFinished(true);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        {finished ? (
          <li className="max-w-xs break-words line-through text-neutral-content">
            {item.name}
          </li>
        ) : (
          <li className="max-w-xs break-words">{item.name}</li>
        )}
        {item.important && (
          <div className="badge badge-primary ">Important</div>
        )}
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          onChange={handleChange}
        />
      </div>
      <div className="divider my-0"></div>
    </>
  );
};

export default Todo;
