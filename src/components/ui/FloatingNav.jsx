import { useState } from "react";
import SportsSection from "./SportsSection";
import LiveSection from "./LiveSection";
import TableSection from "./TableSection";
import SlotSection from "./SlotSection";
import FishingSection from "./FishingSection";
import EGameSection from "./EGameSection";

const FloatingNav = () => {
  const [currentTab, setCurrentTab] = useState("Sports");
  return (
    <div className="w-full h-fit bg-blue-50">
      <div className="bg-[#1B1F23] flex flex-col items-center py-3">
        <div className="overflow-x-auto scroll-smooth w-full  flex items-center">
          <div className="flex items-center gap-x-2 px-2">
            {floatingNavs.map((nav) => (
              <div
                className={`w-[77px]  px-3 py-3 box-border flex flex-col items-center cursor-pointer ${
                  currentTab == nav?.title
                    ? "bg-[#44484C] rounded-md"
                    : "grayscale-[90%]"
                }`}
                key={nav.id}
                onClick={() => setCurrentTab(nav.title)}
              >
                <div className="w-[35px] h-[35px] flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={nav.icon}
                    alt={nav.title}
                  />
                </div>
                <p
                  className={`text-center font-bold text-xs mt-2 ${
                    currentTab == nav?.title
                      ? "text-yellow-300"
                      : "text-gray-500"
                  }`}
                >
                  {nav.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* loader sign */}
        <div className="flex justify-center py-2">
          <div className="flex items-center gap-2">
            <p className="w-8 h-2 rounded-full bg-yellow-400"></p>
            <p className="w-2 h-2 rounded-full bg-gray-400"></p>
          </div>
        </div>
      </div>

      {/* results */}
      <div className="py-5 px-3">
        {currentTab == "Sports" ? (
          <SportsSection />
        ) : currentTab === "Live" ? (
          <LiveSection />
        ) : currentTab === "Table" ? (
          <TableSection />
        ) : currentTab === "Slot" ? (
          <SlotSection />
        ) : currentTab === "Fishing" ? (
          <FishingSection />
        ) : currentTab === "Egame" ? (
          <EGameSection />
        ) : null}
      </div>
    </div>
  );
};

export default FloatingNav;

const floatingNavs = [
  {
    id: 1,
    title: "Sports",
    icon: "/images/coin.png",
  },
  {
    id: 2,
    title: "Live",
    icon: "/images/coin.png",
  },
  {
    id: 3,
    title: "Table",
    icon: "/images/coin.png",
  },
  {
    id: 4,
    title: "Slot",
    icon: "/images/coin.png",
  },
  {
    id: 5,
    title: "Fishing",
    icon: "/images/coin.png",
  },
  {
    id: 6,
    title: "Egame",
    icon: "/images/coin.png",
  },
];
