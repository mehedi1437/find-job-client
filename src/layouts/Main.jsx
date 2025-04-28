import { Outlet } from "react-router-dom";
import Nabar from "../components/Nabar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Nabar></Nabar>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
