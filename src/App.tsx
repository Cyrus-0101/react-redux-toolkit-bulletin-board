import React from "react";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
import PostList from "./features/posts/PostList";

function App() {
  return (
    <div className="container">
      <h1 className="display-1 mt-3 mb-3 px-2 text-center">Bulletin Board</h1>

      <section className="mb-5 justify-content-center">
        <AddPostForm />
      </section>

      <section>
        <PostList />
      </section>
    </div>
  );
}

export default App;
