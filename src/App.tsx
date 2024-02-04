import Input from "./components/Input";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";
import { useState, useEffect } from "react";
import TodoType from "./TodoType";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const addTodo = (newTodo: TodoType): void => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setTodos(response.data);
    });
  }, []);
  return (
    <main className="grid place-content-center mt-6 gap-6">
      <Title />
      <Input onAddTodo={addTodo} />
      <TodoContainer todos={todos} />
    </main>
  );
};

export default App;
