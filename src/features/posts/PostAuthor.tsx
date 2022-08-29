import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/userSlice";

function PostAuthor({ userId }: { userId: string }) {
  const users = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>By {author ? author.name : "Unknown Author"}</span>;
}

export default PostAuthor;
