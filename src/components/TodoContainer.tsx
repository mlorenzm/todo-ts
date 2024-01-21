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
        <div key={i} className="flex justify-between items-center">
          <li className="max-w-xs break-words">{item.name}</li>
          {item.important && (
            <div className="badge badge-primary self-start">Important</div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default TodoContainer;
