import Settings from "components/Settings";

const UserHeader = () => {
  return (
    <div
      className="flex justify-between py-3 px-4"
      style={{ backgroundColor: "#2B466F" }}
    >
      <span className="text-small-regular text-white">Client Dashboard</span>
      <div>
        <Settings />
      </div>
    </div>
  );
};

export default UserHeader;
