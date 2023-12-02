import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const FullPageLoader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <div className="loading-box">
      <div className="loading-container">
        <Spin spinning={true} />
      </div>
    </div>
  );
};

export default FullPageLoader;
