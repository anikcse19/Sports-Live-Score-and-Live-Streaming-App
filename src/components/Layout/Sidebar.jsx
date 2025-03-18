import { BiLogOutCircle } from "react-icons/bi";
import { FaBook, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosGlobe, IoIosListBox } from "react-icons/io";
import { IoSettingsSharp, IoWallet } from "react-icons/io5";
import {
  RiExchangeDollarLine,
  RiMoneyDollarBoxFill,
  RiP2pFill,
} from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbAdjustmentsDollar, TbSquareKey } from "react-icons/tb";
import { VscDebugRestart } from "react-icons/vsc";
import useStore from "../../Zustand/useStore";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { setIsSidebarOpen } = useStore();

  const navigate = useNavigate();
  const menuItems1 = [
    {
      id: 1,
      icon: <RiExchangeDollarLine className="text-xl mr-2" />,
      title: "Deposit",
      link: "/menu/deposit",
    },
    {
      id: 2,
      icon: <RiMoneyDollarBoxFill className="text-xl mr-2" />,
      title: "Payment Transfer log",
      link: "/menu/payment-transfer-log",
    },
  ];
  const menuItems2 = [
    {
      id: 2,
      icon: <FaWhatsapp className="text-xl mr-2" />,
      title: "Upline WhatsApp Number",
      link: "/menu/upline-wp-number",
    },
    {
      id: 3,
      icon: <IoWallet className="text-xl mr-2" />,
      title: "Balance Overview",
      link: "/menu/balance-overview",
    },
    {
      id: 4,
      icon: <IoIosListBox className="text-xl mr-2" />,
      title: "Current Bets",
      link: "/menu/current-bets",
    },
    {
      id: 5,
      icon: <VscDebugRestart className="text-xl mr-2" />,
      title: "Bets History",
    },
    {
      id: 6,
      icon: <TbAdjustmentsDollar className="text-xl mr-2" />,
      title: "Profit & Loss",
    },
    {
      id: 7,
      icon: <TbSquareKey className="text-xl mr-2" />,
      title: "Active Log",
    },
    {
      id: 8,
      icon: <ImProfile className="text-xl mr-2" />,
      title: "My Profile",
    },
  ];

  const menuItems3 = [
    {
      id: 1,
      icon: <RiP2pFill className="text-xl mr-2" />,
      title: "P2P Transfer",
    },
    {
      id: 2,
      icon: <FaBook className="text-xl mr-2" />,
      title: "P2P Transfer log",
    },
  ];

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative px-4 py-3 left-0 top-0 z-50 w-3/4 bg-blue-50 h-full overflow-y-scroll"
    >
      <div data-v-6d6d5fd0="">
        <div className="mt-1 mb-2 px-2 flex justify-between">
          <span data-v-6d6d5fd0="" className="font-bold text-15">
            Menu
          </span>
          <RxCross2
            onClick={() => setIsSidebarOpen()}
            className="text-xl font-bold cursor-pointer"
          />
        </div>

        {/* menuItems 1  */}
        <div className="flex flex-col gap-2 bg-white  rounded-tr-xl rounded-tl-xl text-lg">
          {menuItems1.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(item.link);
                setIsSidebarOpen();
              }}
              className="flex items-center justify-between p-3 border-b border-gray-200"
            >
              <div className="flex items-center gap-x-2">
                {" "}
                {item.icon}
                <span>{item.title}</span>
              </div>
              <FaChevronRight className="text-xl text-gray-400" />
            </div>
          ))}
        </div>
        {/* menuItems 2 */}
        <div className="flex flex-col gap-2 bg-white  rounded-tr-xl rounded-tl-xl my-4 text-lg">
          {menuItems2.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(item.link);
                setIsSidebarOpen();
              }}
              className="flex items-center justify-between p-3 border-b border-gray-200"
            >
              <div className="flex items-center gap-x-2">
                {" "}
                {item.icon}
                <span>{item.title}</span>
              </div>
              <FaChevronRight className="text-xl text-gray-400" />
            </div>
          ))}
        </div>

        {/* menuItems 3 */}
        <div className="flex flex-col gap-2 bg-white  rounded-tr-xl rounded-tl-xl text-lg">
          {menuItems3.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(item.link);
                setIsSidebarOpen();
              }}
              className="flex items-center justify-between p-3 border-b border-gray-200"
            >
              <div className="flex items-center gap-x-2">
                {" "}
                {item.icon}
                <span>{item.title}</span>
              </div>
              <FaChevronRight className="text-xl text-gray-400" />
            </div>
          ))}
        </div>

        {/* setting option */}
        <div className="flex flex-col gap-2 bg-white  rounded-xl my-4 text-lg">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center gap-x-2">
              <IoSettingsSharp className="text-xl mr-2" />
              <span>Setting</span>
            </div>
            <FaChevronRight className="text-xl text-gray-400" />
          </div>
        </div>
        {/* logout option */}
        <div className="flex flex-col gap-2 bg-slate-200  rounded-xl my-4 text-lg">
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center gap-x-2">
              <BiLogOutCircle className="text-xl mr-2" />
              <span>Logout</span>
            </div>
            <FaChevronRight className="text-xl text-gray-400" />
          </div>
        </div>
      </div>
      <div
        data-v-6d6d5fd0=""
        className="time-zone px-3 mt-6 flex justify-center items-start text-black-600"
      >
        <IoIosGlobe className="text-xl mr-2" />
        <p data-v-6d6d5fd0="" className="text-13 leading-tight">
          Time Zone：GMT+6:00
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
