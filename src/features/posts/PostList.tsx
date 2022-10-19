import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Tooltip } from "../../components/ToolTip";
import TimeAgo from "../utils/TimeAgo";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import { ReactionButtons } from "./ReactionButtons";

interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
  date: string;
}

function PostList() {
  const posts = useAppSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post: Post) => (
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

          <hr />
          <div className="d-flex justify-content-around">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </div>

          <div>
            <ReactionButtons post={post} />
          </div>
        </li>
      </ul>
    </article>
  ));

  return (
    <div className="m-5">
      <h3 className="mt-5 p-2 display-3">Our Bulletins</h3>
      {renderedPosts}
    </div>
  );
}

export default PostList;
