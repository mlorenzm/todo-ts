import Input from "./components/Input";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";
import { useState, useCallback } from "react";
const App = () => {
  const [todos, setTodos] = useState([
    {
      name: "going for a walk",
      important: false,
    },
    {
      name: "making this app ",
      important: true,
    },
  ]);
  const handleChangeTodo = useCallback((e) => {
    setTodos(e);
  }, []);
  return (
    <main className="grid place-content-center mt-6 gap-6">
      <Title />
      <Input onChange={handleChangeTodo} />
      <TodoContainer todoArray={todos} />
    </main>
  );
};

export default App;

// TODO
// - set a placeholder when there are no todo items
