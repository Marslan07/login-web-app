import { lazy } from "react";

import ClientDashboardLayout from "layout/Dashboard/ClientDashboard";

const ClientDashboard = lazy(() => import("pages/Client/index"));

export const ClientDashboardRoutes = {
  CLIENTDASHBOARD: {
    name: "clientDashboard",
    path: "/Client/dashboard",
    isProtected: true,
    Component: ClientDashboardLayout(ClientDashboard),
  },
};
