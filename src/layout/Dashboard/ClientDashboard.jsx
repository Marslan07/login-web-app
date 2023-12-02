import ClientHeader from "components/Header/ClientHeader";
import ClientInit from "components/Init/ClientInit";

const ClientDashboard = (Content) => {
  return (props) => (
    <>
      <ClientHeader />
      <ClientInit />

      <Content {...props} />
    </>
  );
};

export default ClientDashboard;
