const Title: React.FC = () => {
  return (
    <header className="flex justify-center">
      <div className="flex gap-2">
        <div className="font-bold  text-6xl">Todo</div>
        <strong className="rounded bg-primary self-start font-black text-base-100 p-2 text-2xl">
          TS
        </strong>
      </div>
    </header>
  );
};

export default Title;
