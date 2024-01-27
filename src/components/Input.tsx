import { useState } from "react";

const Input: React.FC = ({ changeTodos }) => {
  const [isImportant, setIsImportant] = useState(false);
  const handleImportanceChange = () => {
    setIsImportant(!isImportant);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoName = e.currentTarget.todo.value;
    console.log(todoName);
    console.log(isImportant);
    e.currentTarget.reset();
    changeTodos({ name: todoName, important: isImportant });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="label">
        <span className="label-text">What's on your mind?</span>
      </div>
      <div className="flex gap-6 items-center">
        <input
          required
          type="text"
          name="todo"
          placeholder="Type (heh) here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary text-lg">
          <strong>+</strong> Add task
        </button>
        <div className="form-control">
          <label className="label cursor-pointer flex gap-2">
            <span className="label-text">Important</span>
            <input
              type="checkbox"
              name="important"
              checked={isImportant}
              onChange={handleImportanceChange}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
    </form>
  );
};
export default Input;
// TODO:
// - add todos from input; callback fn, typing might be detrimental here
