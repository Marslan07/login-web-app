import { useEffect } from "react";
import { logoutUserAction } from "redux/ActionCreator/Auth";
import { AppRoutes } from "routes";
import { deleteUserToken } from "helpers/user";

function Logout() {
  useEffect(() => {
    deleteUserToken();
    logoutUserAction();
    window.location.replace(AppRoutes.LOGIN.path);
  }, []);
  return null;
}
export default Logout;
