import { isLoggedIn } from "helpers/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsers } from "redux/ActionCreator/UserAction";

function UserInit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users  = useSelector((state) => Object.values(state.user.users));

  useEffect(() => {
    if (isLoggedIn()) {
      if (users.length === 0) dispatch(getUsers);
    } else {
      navigate("/login");
    }
  }, []);
  return <></>;
}

export default UserInit;
