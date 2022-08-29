import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/userSlice";
import { postAdded } from "./postSlice";

function AddPostForm() {
  const dispatch = useAppDispatch();

  const [title, setTitle] = React.useState("");

  const [body, setBody] = React.useState("");

  const [userId, setUserId] = React.useState("");

  const users = useAppSelector(selectAllUsers);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onBodyChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setBody(e.target.value);

  const onAuthorChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
  };

  const onSubmit = () => {
    if (title && body) {
      dispatch(postAdded(title, body, userId));
      setTitle("");
      setBody("");
    }
  };

  const canSave = Boolean(title) && Boolean(body) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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

          <label htmlFor="postAuthor" className="mt-2">
            Post Author
          </label>

          <select
            className="form-select mb-2"
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value="">Select a User</option>
            {usersOptions}
          </select>

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
            className={!canSave ? "btn disabled mt-2" : "btn btn-primary mt-2"}
            onClick={onSubmit}
            disabled={!canSave}
          >
            Add Bulletin
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPostForm;
