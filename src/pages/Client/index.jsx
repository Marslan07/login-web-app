import { Divider, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/ActionCreator/UserAction";

function Client() {
  const [data, setData] = useState(null);
  const { loading, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  useEffect(() => {
    if (users && users.length > 0) {
      const user = users.find((user) => user.uid === userId);
      setData(user);
    }
  }, [users, userId]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users.length, dispatch]);

  return (
    <Spin spinning={loading}>
      <div className="flex">
        {data && (
          <div className="container">
            <Divider
              orientation="left"
              style={{
                fontFamily: "Montserrat-Regular",
                fontWeight: "bold",
                color: "black",
                fontSize: "14px",
                marginBottom: "5%",
                padding: "0px",
              }}
            >
              PERSONAL INFORMATION
            </Divider>
            <div className="flex">
              <div className="flex align-items-center">
                <div className="flex flex-column">
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",

                      fontSize: "14px",
                    }}
                  >
                    First Name
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",
                      color: "#263238",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {data.name}
                  </span>
                </div>
              </div>

              <div className="flex align-items-center mt-3">
                <div className="flex flex-column">
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",

                      fontSize: "14px",
                    }}
                  >
                    Email Address
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",
                      color: "#263238",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {data.email}
                  </span>
                </div>
              </div>
              <div className="flex align-items-center mt-3">
                <div className="flex flex-column">
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",

                      fontSize: "14px",
                    }}
                  >
                    Phone Number
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",
                      color: "#263238",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {data.phone}
                  </span>
                </div>
              </div>

              <div className="flex align-items-center my-3">
                <div className="flex flex-column">
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",

                      fontSize: "14px",
                    }}
                  >
                    Location
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat-Regular",
                      color: "#263238",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {data?.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
}

export default Client;
