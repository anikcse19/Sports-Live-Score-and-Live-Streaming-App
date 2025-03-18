import { FaFire } from "react-icons/fa6";
import { FaArrowDownAZ } from "react-icons/fa6";
import { useState } from "react";
import Latest from "../SlotTabs/Latest";
import AtoZ from "../SlotTabs/A-Z";

const SlotSection = () => {
  const [currentTab, setCurrentTab] = useState("Latest");
  return (
    <div className="flex gap-3">
      <div className="w-[18%] h-fit bg-white rounded p-1">
        <div className="flex flex-col gap-y-5">
          {slotGameOptions?.map((op) => (
            <div
              onClick={() => setCurrentTab(op?.title)}
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
        {currentTab === "Latest" ? (
          <Latest />
        ) : currentTab === "A-Z" ? (
          <AtoZ />
        ) : null}
      </div>
    </div>
  );
};

export default SlotSection;

const slotGameOptions = [
  {
    id: 2,
    title: "Latest",
    icon: FaFire,
  },

  {
    id: 3,
    title: "A-Z",
    icon: FaArrowDownAZ,
  },
];
