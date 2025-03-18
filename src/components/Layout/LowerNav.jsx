import { IoMdHome } from "react-icons/io";
import { CgCardSpades } from "react-icons/cg";
import { HiTrophy } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdSportsCricket } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import useStore from "../../Zustand/useStore";

const LowerNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isBackLayoutOpen, setIsBackLayoutOpen } = useStore();

  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className="w-[375px] md:w-[500px] mx-auto h-20 border-t bg-white border-slate-500 fixed bottom-0 flex items-center"
    >
      <div className="w-full flex items-center justify-between px-3">
        {navs.map((nav) => (
          <div
            onClick={() => {
              navigate(nav.link);
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              location.pathname === nav.link
                ? "bg-yellow-400 p-2 rounded-md"
                : ""
            }`}
            key={nav?.id}
          >
            <nav.icon className="text-3xl font-bold" />
            <p className="text-sm">{nav?.title}</p>
          </div>
        ))}
      </div>

      <div
        className={`w-full ${
          isBackLayoutOpen.status ? "h-96" : "h-0"
        } transition-all duration-300 ease-in bg-red-500 absolute bottom-0 z-[2000000]`}
      >
        <button
          onClick={() => {
            setIsBackLayoutOpen({ status: false, elements: {} });
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LowerNav;

const navs = [
  {
    id: 1,
    title: "Home",
    icon: IoMdHome,
    link: "/",
  },
  {
    id: 2,
    title: "Casino",
    icon: CgCardSpades,
    link: "/casino",
  },
  {
    id: 3,
    title: "Sports",
    icon: MdSportsCricket,
    link: "/sports",
  },
  {
    id: 4,
    title: "Leagues",
    icon: HiTrophy,
    link: "/leagues",
  },
  {
    id: 5,
    title: "Bets",
    icon: LiaClipboardListSolid,
    link: "/bets",
  },
];
