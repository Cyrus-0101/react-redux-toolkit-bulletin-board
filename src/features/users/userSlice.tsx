import { createSlice, nanoid } from "@reduxjs/toolkit";

interface User {
  users: {
    id: string;
    name: string;
  }[];
}

const initialState = [
  { id: "0", name: "Cyrus Gichuki" },
  { id: "1", name: "Kim Kardashian" },
  { id: "2", name: "Lindsay Lohan" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name: string): any {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state: User) => state.users;

export const { userAdded } = userSlice.actions;

export default userSlice.reducer;
