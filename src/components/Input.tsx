export default function Input() {
  return (
    <form>
      <div className="label">
        <span className="label-text">What's on your mind?</span>
      </div>
      <div className="flex gap-6 items-center">
        <input
          type="text"
          placeholder="Type (heh) here"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-primary text-lg">
          <strong>+</strong> Add task
        </button>
        <div className="form-control">
          <label className="label cursor-pointer flex gap-2">
            <span className="label-text">Important</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
      </div>
    </form>
  );
}

// TODO:
// - add todos from input; callback fn, typing might be detrimental here
