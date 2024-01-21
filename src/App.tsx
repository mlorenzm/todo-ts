import Input from "./components/Input";
import Title from "./components/Title";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  const todos = [
    {
      name: "going for a walk",
    },
    {
      name: "making this app ",
      important: true,
    },
  ];
  return (
    <main className="grid place-content-center mt-6 gap-6">
      <Title />
      <Input />
      <TodoContainer todoArray={todos} />
    </main>
  );
};

export default App;

// TODO
// - set a placeholder when there are no todo items
