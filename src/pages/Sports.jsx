import { IoFootballOutline, IoMicOutline, IoTennisball } from "react-icons/io5";
import Layout from "../components/Layout/Layout";
import { IoSearch } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { HiMiniArrowsUpDown, HiMiniTrophy } from "react-icons/hi2";
import { BiSolidCricketBall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import CricketMatches from "../components/ui/Sports/CricketMatches";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FootballMatches from "../components/ui/Sports/FootballMatches";
import TennisMatches from "../components/ui/Sports/TennisMatches";

const Sports = () => {
  const [openSorting, setOpenSorting] = useState({
    state: false,
    value: ["by Competition", "by Time", "by Matched"],
  });

  const location = useLocation();

  // Create a URLSearchParams instance
  const searchParams = new URLSearchParams(location.search);

  // Get specific query parameters
  const query = searchParams.get("type");

  const [currentNav, setcurrentNav] = useState(query);
  const [currentPlayTime, setCurrentPlayTime] = useState("In-Play");

  console.log(query, "qq");

  console.log(currentNav, "c nav");

  return (
    <Layout>
      {/* floating text */}
      <div className="flex items-center bg-white gap-3">
        <div className="px-3 border-r border-slate-700">
          <IoMicOutline className="text-xl" />
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="scrolling-text inline-block font-bold text-sm  py-0.5">
            {/* Your continuously scrolling text */}
            Bangladesh v South Africa46 Over Run SA 155-400/155-300
            RATE-BETS-WILL-BE-VOIDED-DUE-TO-WRONG-RATE (09:34:48 TO 09:35:06IST)
          </div>
        </div>
      </div>
      {/* two navs */}
      <div className="flex flex-col">
        {/* 1st one */}
        <div className="w-full  bg-black text-gray-400 text-lg font-bold flex items-center justify-between">
          <div className="flex items-center  gap-2  bg-slate-800 py-2 px-3">
            <div className="bg-yellow-400 w-8 h-3 rounded-2xl mt-1"></div>
            <p className="text-xs md:text-sm">Parlay</p>
          </div>
          <div
            onClick={() => setCurrentPlayTime("In-Play")}
            className={`${
              currentPlayTime === "In-Play" ? "text-white" : "text-gray-500"
            } border-white text-xs md:text-sm`}
          >
            In Play
          </div>
          <div
            onClick={() => setCurrentPlayTime("Today")}
            className={`${
              currentPlayTime === "Today" ? "text-white" : "text-gray-500"
            } border-white text-xs md:text-sm`}
          >
            Today
          </div>
          <div
            onClick={() => setCurrentPlayTime("Tomorrow")}
            className={`${
              currentPlayTime === "Tomorrow" ? "text-white" : "text-gray-500"
            } border-white text-xs md:text-sm`}
          >
            Tomorrow
          </div>
          <div className="">
            <IoIosStarOutline className="text-2xl" />
          </div>
          <div className="">
            <IoSearch className="text-2xl" />
          </div>
        </div>
        {/* 2nd one */}
        <div className="w-full h-12 bg-[#333333] flex items-center px-3">
          <div className="flex items-center gap-1 md:gap-x-3">
            {navs.map((nav) => (
              <div
                onClick={() => {
                  setcurrentNav(nav.label);
                }}
                className={`flex items-center gap-1 px-2 py-1.5 rounded-full cursor-pointer ${
                  currentNav === nav.label
                    ? "text-black font-bold bg-yellow-400"
                    : "text-white font-bold"
                }`}
                key={nav.id}
              >
                <nav.icon className=" text-base md:text-2xl" />
                <p>{nav?.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sorted */}
      <div className="m-3 flex ">
        <div
          className={`bg-white w-[140px] px-5 py-1 rounded-md text-sm relative flex flex-col gap-y-1 ${
            openSorting.state ? "h-fit" : "h-8"
          } overflow-hidden content-center`}
        >
          <HiMiniArrowsUpDown className="absolute top-2  left-1 z-40" />
          {openSorting?.value.map((v) => (
            <p
              onClick={() => {
                const newArr = [v, openSorting.value.filter((f) => f !== v)];
                setOpenSorting({
                  state: false,
                  value: newArr,
                });
              }}
              className="cursor-pointer"
              key={v}
            >
              {v}
            </p>
          ))}
          <FaCaretDown
            onClick={() =>
              setOpenSorting({
                state: !openSorting.state,
                value: ["by Competition", "by Time", "by Matched"],
              })
            }
            className={`absolute top-2  right-1 z-40 cursor-pointer ${
              openSorting.state && "rotate-180"
            }`}
          />
        </div>
      </div>
      {/* games */}
      {currentNav === "All" ? (
        <>
          <CricketMatches />
          <FootballMatches />
          <TennisMatches />
        </>
      ) : currentNav === "Cricket" ? (
        <CricketMatches />
      ) : currentNav === "Soccer" ? (
        <FootballMatches />
      ) : (
        currentNav === "Tennis" && <TennisMatches />
      )}
    </Layout>
  );
};

export default Sports;

const navs = [
  { id: 0, title: "All", label: "All", icon: HiMiniTrophy },
  {
    id: 1,
    title: "Cricket",
    label: "Cricket",
    icon: BiSolidCricketBall,
  },
  {
    id: 2,
    title: "Soccer",
    label: "Soccer",
    icon: IoFootballOutline,
  },
  {
    id: 3,
    title: "Tennis",
    label: "Tennis",
    icon: IoTennisball,
  },
];
