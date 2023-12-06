import { Card } from "react-bootstrap";

import MyNavbar from "../components/common/Navbar";

const Dashboard = (props) => {
  const children = props.children;

  return (
    <>
      <MyNavbar />

      <div style={{ padding: 20 }}>
        <Card>{children}</Card>
      </div>
    </>
  );
};

export default Dashboard;
