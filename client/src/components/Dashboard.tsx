import SideBar from "./SideBar";

const Dashboard = ({ id }: { id: string }) => {
  return (
    <div>
      <SideBar id={id} />
    </div>
  );
};

export default Dashboard;
