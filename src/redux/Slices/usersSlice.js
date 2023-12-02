import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUserLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setUsers, setUserLoading } = userSlice.actions;
export default userSlice.reducer;
