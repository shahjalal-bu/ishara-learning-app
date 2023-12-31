
import { Outlet, useNavigation } from "react-router-dom";
import GlobalSpinner from "../pages/Shared/GlobalSpinner/GlobalSpinner";
import SideNavigation from "./SideNavigation";

const Dashboard = () => {
  //loading stage handle
  const navigation = useNavigation();
  return (
    <div className="dark:bg-slate-700 min-h-screen">
      <div className="px-2">
        {/* {navigation.state === "loading" && <GlobalSpinner />} */}
        <div className="container mx-auto px-5 py-3 sm:px-20">
          <div className="gap-y-2 sm:gap-y-0 flex-col sm:flex-row flex gap-x-5">
            <SideNavigation />
            <div className="sm:flex-1 overflow-x-auto ">
             <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
