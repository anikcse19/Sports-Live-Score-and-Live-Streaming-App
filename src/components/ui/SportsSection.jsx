import { GiAlarmClock } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaCalendarDay } from "react-icons/fa";
import { HiTrophy } from "react-icons/hi2";
import { VscCircuitBoard } from "react-icons/vsc";
import { useState } from "react";
import InPlay from "../SportsTabs/InPlay";
import Today from "../SportsTabs/Today";
import Tomorrow from "../SportsTabs/Tomorrow";
import { useNavigate } from "react-router-dom";

const SportsSection = () => {
  const [currentTab, setCurrentTab] = useState("In-Play");
  const navigate = useNavigate();
  return (
    <div className="flex gap-3">
      <div className="w-[18%] h-fit bg-white rounded p-1">
        <div className="flex flex-col gap-y-5">
          {sportOptions?.map((op) => (
            <div
              onClick={() => {
                setCurrentTab(op?.title);
                if (op?.link) {
                  navigate(op.link);
                }
              }}
              className={`flex flex-col items-center gap-1 py-4 px-0.5 rounded cursor-pointer ${
                currentTab == op?.title
                  ? "bg-yellow-300 text-black"
                  : "text-gray-700"
              }`}
              key={op?.id}
            >
              <op.icon className="text-4xl font-bold" />
              <p className="text-xs">{op?.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[82%] h-fit flex flex-col gap-2">
        {currentTab === "In-Play" ? (
          <InPlay />
        ) : currentTab === "Today" ? (
          <Today />
        ) : currentTab === "Tomorrow" ? (
          <Tomorrow />
        ) : null}
      </div>
    </div>
  );
};

export default SportsSection;

const sportOptions = [
  {
    id: 1,
    title: "In-Play",
    icon: GiAlarmClock,
  },
  {
    id: 2,
    title: "Today",
    icon: FaCalendarDay,
  },
  {
    id: 3,
    title: "Tomorrow",
    icon: SlCalender,
  },
  {
    id: 4,
    title: "Leagues",
    icon: HiTrophy,
    link: "/leagues",
  },
  {
    id: 5,
    title: "Parlay",
    icon: VscCircuitBoard,
  },
];
