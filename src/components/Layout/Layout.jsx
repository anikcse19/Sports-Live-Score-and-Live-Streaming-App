/* eslint-disable react/prop-types */
import useStore from "../../Zustand/useStore";
import Header from "./Header";
import LowerNav from "./LowerNav";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { isSidebarOpen, setIsSidebarOpen } = useStore();

  console.log(isSidebarOpen, "side from lay");

  return (
    <div className="w-[375px] md:w-[500px] mx-auto relative">
      <Header />
      <div className="mb-20 pb-5 bg-blue-50 min-h-screen">{children}</div>
      <LowerNav />

      {/* sidebar */}
      <div
        onClick={() => setIsSidebarOpen()}
        className={`h-screen fixed top-0 z-[2000] ${
          isSidebarOpen
            ? "w-[375px] md:w-[500px] mx-auto"
            : "w-0 overflow-hidden"
        }  transition-all duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
