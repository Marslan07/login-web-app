import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import { Spin } from "antd";

import siteLayout from "layout/SiteLayout/index";
import { ClientDashboardRoutes } from "routes/ClientSideRoutes";
import { AdminDashboadRoutes } from "routes/AdminSideRoutes";

// Common unprotected components
const Login = lazy(() => import("pages/Auth"));
const Signup = lazy(() => import("pages/Auth/Signup.jsx"));
const Logout = lazy(() => import("pages/Auth/Logout"));

const RouterHOC = (routes, defaultPath = "/login") => {
  return (props) => (
    <Suspense fallback={<Spin spinning={true} />}>
      <Routes>
        {map(routes, (route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.Component />}
            exact
          />
        ))}
        <Route path="*" element={<Navigate to={defaultPath} />} />
      </Routes>
    </Suspense>
  );
};

export const AppRoutes = {
  LOGIN: {
    name: "login",
    path: "/login",
    isProtected: false,
    Component: siteLayout(Login),
  },
  SIGNUP: {
    name: "signup",
    path: "/signup",
    isProtected: false,
    Component: siteLayout(Signup),
  },
  LOGOUT: {
    name: "logout",
    path: "/logout",
    isProtected: false,
    Component: siteLayout(Logout),
  },
  ...ClientDashboardRoutes,
  ...AdminDashboadRoutes,
};

export const AppRouter = RouterHOC(AppRoutes, "/login");
