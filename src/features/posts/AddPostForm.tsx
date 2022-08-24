import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { postAdded } from "./postSlice";

function AddPostForm() {
  const dispatch = useAppDispatch();

  const [title, setTitle] = React.useState("");

  const [body, setBody] = React.useState("");

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onBodyChanged = (e: any) => setBody(e.target.value);

  const onSubmit = () => {
    if (title && body) {
      dispatch(postAdded(title, body));
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="border border-3 border-warning rounded p-3 m-5 shadow-lg p-3 mb-5 bg-body rounded">
      <h1 className="display-2 mt-2 mb-2 p-3">Add New Post To Redux State</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title" className="mt-2">
            Title
          </label>

          <input
            type="text"
            className="form-control mb-2"
            id="title"
            placeholder="Enter Bulletin title"
            value={title}
            onChange={onTitleChanged}
          />

          <label htmlFor="body" className="mt-2">
            Body
          </label>

          <textarea
            className="form-control mb-2"
            id="body"
            rows={3}
            placeholder="Enter Bulletin body"
            value={body}
            onChange={onBodyChanged}
          />

          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={onSubmit}
          >
            Add Bulletin
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPostForm;
