import { useState } from "react";
interface TodoObject {
  name: string;
  important?: boolean;
}

const Todo: React.FC<TodoObject> = (item: TodoObject) => {
  const [finished, setFinished] = useState(false);
  const handleChange = () => {
    finished ? setFinished(false) : setFinished(true);
    console.log(finished);
  };
  return (
    <div className="flex justify-between items-center">
      {finished ? (
        <li className="max-w-xs break-words line-through text-gray-400">
          {item.name}
        </li>
      ) : (
        <li className="max-w-xs break-words">{item.name}</li>
      )}
      {item.important && (
        <div className="badge badge-primary self-start">Important</div>
      )}
      <input
        type="checkbox"
        className="checkbox checkbox-primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default Todo;
