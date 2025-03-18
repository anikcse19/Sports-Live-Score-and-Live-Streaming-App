import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { BiSolidCricketBall } from "react-icons/bi";
import { IoFootballOutline } from "react-icons/io5";
import { IoTennisball } from "react-icons/io5";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Leagues = () => {
  const [currentNav, setcurrentNav] = useState("Cricket");
  return (
    <Layout>
      {/* navs */}
      <div className="h-14 w-full bg-[#333333] flex items-center px-4">
        <div className="flex items-center gap-x-3">
          {navs.map((nav) => (
            <div
              onClick={() => {
                setcurrentNav(nav.title);
              }}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-full cursor-pointer ${
                currentNav === nav.title
                  ? "text-black font-bold bg-yellow-400"
                  : "text-white font-bold"
              }`}
              key={nav.id}
            >
              <nav.icon className="text-2xl" />
              <p>{nav?.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* popular cricket body */}
      <div className="m-3">
        <p className="text-slate-700 font-bold text-xl">Popular</p>
        <div className="mt-2 flex flex-col gap-y-0.5">
          {popularSCricket?.map((c) => (
            <div
              className="bg-white p-4 rounded-sm flex items-center justify-between"
              key={c.id}
            >
              <div className="flex items-center gap-x-2">
                <FaRegArrowAltCircleUp />
                <p>{c?.title}</p>
              </div>
              <div>
                <FaChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* rest of world cricket body */}
      <div className="m-3">
        <p className="text-slate-700 font-bold text-xl">Rest of World</p>
        <div className="mt-2 flex flex-col gap-y-0.5">
          {resOfWorldCricket?.map((c) => (
            <div
              className="bg-white p-4 rounded-sm flex items-center justify-between"
              key={c.id}
            >
              <div className="flex items-center gap-x-2">
                <FaRegArrowAltCircleUp />
                <p>{c?.title}</p>
              </div>
              <div>
                <FaChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Leagues;

const navs = [
  {
    id: 1,
    title: "Cricket",
    icon: BiSolidCricketBall,
  },
  {
    id: 2,
    title: "Football",
    icon: IoFootballOutline,
  },
  {
    id: 3,
    title: "Tennis",
    icon: IoTennisball,
  },
];

const popularSCricket = [
  {
    id: 1,
    title: "ICC Cricket World Cup League 2",
    link: "",
  },
  {
    id: 2,
    title: "South Africa T20 Challenges",
    link: "",
  },
  {
    id: 3,
    title: "Test Matches",
    link: "",
  },
  {
    id: 4,
    title: "Indian Premier League",
    link: "",
  },
  {
    id: 5,
    title: "International Twenty20 Matches",
    link: "",
  },
  {
    id: 6,
    title: "One Day Internationals",
    link: "",
  },
  {
    id: 7,
    title: "Womens One Day Internationals",
    link: "",
  },
  {
    id: 8,
    title: "Twenty20 Big Bash",
    link: "",
  },
  {
    id: 9,
    title: "Ford Trophu",
    link: "",
  },
];

const resOfWorldCricket = [
  {
    id: 1,
    title: "ECN Malta T10",
    link: "",
  },
  {
    id: 2,
    title: "ICC Champions Trophy",
    link: "",
  },
  {
    id: 3,
    title: "ICC Men's T20 Africa Qualifiers",
    link: "",
  },
  {
    id: 4,
    title: "The Ashes",
    link: "",
  },
  {
    id: 5,
    title: "WBBL",
    link: "",
  },
];
