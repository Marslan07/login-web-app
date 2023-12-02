import AdminHeader from "components/Header/AdminHeader";
import AdminInit from "components/Init/AdminInit";

const AdminDashboard = (Content) => {
  return (props) => (
    <>
      <AdminHeader />
      <AdminInit />

      <Content {...props} />
    </>
  );
};

export default AdminDashboard;
