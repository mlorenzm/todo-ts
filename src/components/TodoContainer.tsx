interface TodoObject {
  name: string;
  important?: boolean;
}
interface TodoProps {
  todoArray: TodoObject[];
}

const TodoContainer: React.FC<TodoProps> = ({ todoArray }) => {
  return (
    <div>
      {todoArray.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default TodoContainer;
