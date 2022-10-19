import { useDispatch } from "react-redux";

import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "🎉",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

export const ReactionButtons = ({ post }: any) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <div className="d-inline-flex p-4">
        <button
          key={name}
          type="button"
          className="mt-2 reaction-button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      </div>
    );
  });

  return <div>{reactionButtons}</div>;
};
