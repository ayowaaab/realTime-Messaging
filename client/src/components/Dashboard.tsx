import SideBar from "./SideBar";

const Dashboard = ({ id }: { id: string }) => {
  return <div className="w-1/2 mx-auto">
  <SideBar id = {id} />
    
  </div>;
};

export default Dashboard;
