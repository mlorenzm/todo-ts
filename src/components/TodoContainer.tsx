// import { useState } from "react";
interface TodoObject {
  name: string;
  important?: boolean;
}
interface TodoProps {
  todoArray: TodoObject[];
}

const TodoContainer: React.FC<TodoProps> = ({ todoArray }) => {
  //   const [finished, setFinished] = useState(false);
  return (
    <ul className="text-xl flex flex-col gap-2">
      {todoArray.map((item, i) => (
        <div key={i} className="flex justify-between items-center">
          <li className="max-w-xs break-words">{item.name}</li>
          {item.important && (
            <div className="badge badge-primary self-start">Important</div>
          )}
          <input
            type="checkbox"
            checked="checked"
            className="checkbox checkbox-primary"
          />
        </div>
      ))}
    </ul>
  );
};

// TODO:
// - make disappear typeError on checked input
// - update array to delete finished todos

export default TodoContainer;
