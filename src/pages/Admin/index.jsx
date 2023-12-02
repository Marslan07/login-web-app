import { Spin} from "antd";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { loading, users } = useSelector((state) => state.user);

  return (
    <Spin spinning={loading}>
      <div className="w-50 flex flex-column mt-4 text-center m-auto">
        <h2>Users Table</h2>
        <table className="table table-bordered  mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              Object.values(users).map((user) => (
                <tr key={user.uid}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Spin>
  );
};

export default Dashboard;
