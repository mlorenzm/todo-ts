export default function Input() {
  return (
    <form>
      <div className="label">
        <span className="label-text">What's on your mind?</span>
      </div>
      <div className="flex gap-6">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary text-lg">
          <strong>+</strong> Add task
        </button>
      </div>
    </form>
  );
}
