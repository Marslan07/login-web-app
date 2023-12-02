import { Route, Navigate } from "react-router-dom";
// import { isLoggedIn } from "utils/user";
// import { AppRoutes } from "routes";

const ProtectedRoute = ({ name, path, Component, isProtected }) => {
  return <Route path={path} key={name} element={<Component />} exact />;
};

export default ProtectedRoute;
