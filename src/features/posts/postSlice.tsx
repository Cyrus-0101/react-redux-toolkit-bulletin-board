import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Post {
  posts: {
    id: string;
    title: string;
    body: string;
    userId: string;
  }[];
}

const initialState = [
  { id: "1", title: "Hello World", body: "This is a post", userId: "1" },
  { id: "2", title: "Hello World 2", body: "This is a post", userId: "2" },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title: string, body: string, userId: string): any {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state: Post) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
