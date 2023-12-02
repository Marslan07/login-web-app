import { createSlice } from "@reduxjs/toolkit";
import { setUserToken } from "helpers/user";

const initialState = {
  id: Number(localStorage.getItem("id") || ""),
  email: localStorage.getItem("email") || "",
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      localStorage.setItem(
        "id",
        action.payload.status === "ACTIVE" && action.payload.uid
      );
      localStorage.setItem(
        "email",
        action.payload.status === "ACTIVE" && action.payload.email
      );
      localStorage.setItem("role", action.payload.userType);

      setUserToken(action.payload.status === "ACTIVE" && action.payload.token);
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    setAuthLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
