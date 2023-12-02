import { Form, Input, message, Spin } from "antd";
import image from "assets/Right-image.svg";
import logo from "assets/_Placeholder Logo.svg";
import { signupApi } from "api";
import { useDispatch, useSelector } from "react-redux";
import { setAuthLoading } from "redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import FullPageLoader from "components/FullPageLoader";

const Signup = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onFinish = (v) => {
    dispatch(setAuthLoading(true));
    console.log(v)
  };
  const onFinishFailed = (v) => {
    console.log(v);
  };
  if (loading) return <FullPageLoader />;
  return (
    <div className="flex w-full lg:justify-between sm:justify-center md:justify-center h-screen">
    <div className="p-14 lg:w-2/5 md:w-3/5 sm:w-3/5">
        <img src={logo} className="w-22" />
        <div className="flex flex-col gap-3 mt-10">
          <span className="text-heading-bold text-dark-1">
            Welcome <br /> back
          </span>
          <span className="text-dark-2">
            You need to be signed up to access the project dashboard.
          </span>
        </div>
        <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <div className="flex flex-col mt-3">
            <div className="flex flex-col gap-3">
              <span className="text-base-medium text-dark-1">
                Email or Username
              </span>
              <Form.Item
                name="userName"
                rules={[
                
                  {
                    required: true,
                    message: "Please input your E-mail or username!",
                  },
                ]}
              >
                <Input
                  className="text-[16px] bg-white"
                  placeholder="Enter email"
                />
              </Form.Item>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-base-medium text-dark-1">Password</span>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password className="text-[16px] bg-white" />
              </Form.Item>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <button
                className="login-button-style w-full py-2 text-dark-green text-base-medium"
                type="subimt"
              >
                Sign up
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <span className=" py-2 text-dark-2 text-base-medium">
                Haven’t an account?{" "}
                <text
                  className="underline text-dark-1"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </text>{" "}
              </span>
            </div>
          </div>
        </Form>
      </div>
      <div className=" w-5/6 max-h-screen sm:hidden md:hidden lg:block">
        <img src={image} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Signup;
