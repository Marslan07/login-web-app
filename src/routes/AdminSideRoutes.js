import { lazy } from "react";
import adminDashboadLayout from "layout/Dashboard/AdminDashboad";
const Dashboard = lazy(() => import("pages/Admin/index"));

export const AdminDashboadRoutes = {
  ADMINDASHBOARD: {
    name: "adminDashboard",
    path: "/admin/dashboard",
    isProtected: true,
    Component: adminDashboadLayout(Dashboard),
  },
}
