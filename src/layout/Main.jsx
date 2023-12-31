import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalSpinner from "../pages/Shared/GlobalSpinner/GlobalSpinner";

const Main = () => {
  //loading stage handle
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" && <GlobalSpinner />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
