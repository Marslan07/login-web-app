import { getUsersApi, loginApi } from "api";
import { setUserLoading, setUsers } from "redux/Slices/usersSlice";

export const getUsers = (dispatch) => {
  dispatch(setUserLoading(true));
  loginApi()
    .then((res) => {
      dispatch(setUsers(res.data));
    })
    .catch((err) => {
      console.log(err);
      throw new Error("something went wrong", err);
    })
    .finally(() => {
      dispatch(setUserLoading(false));
    });
};
