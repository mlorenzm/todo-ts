import Input from "./components/Input";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  const todos = [
    {
      name: "going for a walk",
    },
    {
      name: "making this app mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
      important: true,
    },
  ];
  return (
    <main className="grid place-content-center mt-6 gap-6">
      <Input />
      <TodoContainer todoArray={todos} />
    </main>
  );
};

export default App;
