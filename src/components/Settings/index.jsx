import { Dropdown } from "antd";
import { MdOutlineLogout } from "react-icons/md";
import { CgPushChevronDownR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <div
          className="flex items-center"
          onClick={() => {
            navigate("/logout");
          }}
        >
          <MdOutlineLogout />
          <span className="ms-2">Logout</span>
        </div>
      ),
    },
  ];
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <CgPushChevronDownR className="text-white text-small-regular" />
      </Dropdown>
    </>
  );
};

export default Settings;
