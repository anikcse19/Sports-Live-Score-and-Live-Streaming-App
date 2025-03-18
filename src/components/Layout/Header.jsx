import { FaPlusCircle } from "react-icons/fa";
import { IoMdLogIn, IoMdMenu } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LuRefreshCw } from "react-icons/lu";
import { FaChevronLeft } from "react-icons/fa6";
import useStore from "../../Zustand/useStore";

const Header = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  console.log(pathname, "path");

  const { setIsSidebarOpen, isSidebarOpen } = useStore();
  const user = JSON.parse(Cookies.get("user")) || "";

  console.log(isSidebarOpen, "si");

  return (
    <div className="sticky top-0 z-[1000] w-[375px] md:w-[500px] mx-auto h-16 bg-yellow-400 flex items-center">
      <div className="w-full  px-2 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-2">
          {user &&
            (pathname === "/" ? (
              <button onClick={() => setIsSidebarOpen()}>
                <IoMdMenu className="text-2xl" />
              </button>
            ) : (
              <button onClick={() => navigate(-1)}>
                <FaChevronLeft className="text-2xl" />
              </button>
            ))}
          <img
            className="w-[100px] object-cover"
            src="/images/velki-logo.webp"
            alt=""
          />
        </div>
        {/*sign up and login */}
        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-0.5">
              <p>{user?.userName}</p>
              <div>
                PUB {user?.wallet?.amount?.toFixed(2)} Exp
                <p className="inline text-red-500">(0)</p>
              </div>
            </div>
            <div>
              <LuRefreshCw className="text-xl rotate-90" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div
              onClick={() => navigate("/sign-up")}
              className="flex items-center gap-1 bg-[#8b6b05] text-white px-3 py-1 rounded-md text-lg  font-bold cursor-pointer"
            >
              <FaPlusCircle />
              <p>Sign Up</p>
            </div>
            <div
              onClick={() => navigate("/log-in")}
              className="flex items-center gap-1 bg-[#e20000] text-white px-3 py-1 rounded-md text-lg font-bold cursor-pointer"
            >
              <IoMdLogIn />
              <div>Login</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
