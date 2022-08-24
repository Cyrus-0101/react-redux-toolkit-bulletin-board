import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Tooltip } from "../../components/ToolTip";
import { selectAllPosts } from "./postSlice";

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  // const dispatch = useAppDispatch();

  const posts = useAppSelector(selectAllPosts);

  const renderedPosts = posts
    .map((post: Post) => (
      <article
        key={post.id}
        className="card mb-3 shadow p-3 mb-5 bg-body border-0 rounded"
      >
        <ul>
          <li>
            <h4 className="mt-3 mb-2 p-2 display-4">{post.title}</h4>
            <Tooltip text={post.body}>
              <p className="mb-3 p-2 display-6 text-muted">
                <em>{post.body.substring(0, 10)}&hellip;</em>
              </p>
            </Tooltip>
          </li>
        </ul>
      </article>
    ))
    .reverse();

  return (
    <div className="m-5">
      <h3 className="mt-5 p-2 display-3">Our Bulletins</h3>
      {renderedPosts}
    </div>
  );
}

export default PostList;
