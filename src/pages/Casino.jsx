import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { IoSearch } from "react-icons/io5";

const Casino = () => {
  const [currentTab, setCurrentTab] = useState("Popular");
  const [currentCat, setCurrentCat] = useState("Catalog");
  return (
    <Layout>
      {/* floating nav */}
      <div
        style={{
          backgroundImage: `url('/images/nav_bg.png')`,
          backgroundSize: "contain",
        }}
        className="bg-[#1B1F23] flex flex-col items-center "
      >
        <div className="overflow-x-auto scroll-smooth w-full  flex items-center">
          <div className="flex items-center gap-x-2 px-2">
            {floatingNavs.map((nav) => (
              <div
                className={`w-[77px]  px-3 py-3 box-border flex flex-col items-center cursor-pointer `}
                key={nav.id}
                onClick={() => setCurrentTab(nav.title)}
              >
                <p
                  className={`text-center font-bold text-sm ${
                    currentTab == nav?.title
                      ? "text-[#CCB386]"
                      : "text-[#946F3B]"
                  }`}
                >
                  {nav.title}
                </p>
                <div className="w-[40px] h-[40px] flex-shrink-0 mt-2">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={nav.icon}
                    alt={nav.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* loader sign */}
        <div className="flex justify-center py-2">
          <div className="flex items-center gap-2">
            <p className="w-8 h-2 rounded-full bg-[#CCB386]"></p>
            <p className="w-2 h-2 rounded-full bg-[#946F3B]"></p>
          </div>
        </div>
      </div>

      {/* filter ops */}
      <div className="px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <p
            onClick={() => setCurrentCat("Catalog")}
            className={`px-3 py-1  rounded-full font-bold cursor-pointer ${
              currentCat === "Catalog" && "bg-yellow-500"
            }`}
          >
            Catalog
          </p>
          <p
            onClick={() => setCurrentCat("Latest")}
            className={`px-3 py-1  rounded-full font-bold cursor-pointer ${
              currentCat === "Latest" && "bg-yellow-500"
            }`}
          >
            Latest
          </p>
          <p
            onClick={() => setCurrentCat("A-Z")}
            className={`px-3 py-1  rounded-full font-bold cursor-pointer ${
              currentCat === "A-Z" && "bg-yellow-500"
            }`}
          >
            A-Z
          </p>
        </div>
        <div>
          <IoSearch className="text-2xl font-bold" />
        </div>
      </div>

      {/* results */}
      <div className="m-3 bg-white h-fit rounded-2xl relative">
        <div className="absolute  top-0 -left-3 bg-yellow-500 w-52 font-bold text-center px-4 py-2 rounded-tr-full rounded-br-full">
          Game Shows
        </div>

        <div className="py-16 grid grid-cols-3 place-items-center gap-2">
          {[
            1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25,
          ].map((op) => (
            <div
              key={op}
              className="w-[140px] h-[140px] rounded-tr-2xl rounded-bl-2xl overflow-hidden"
            >
              <img src="/images/liveGameImg1.png" alt="" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Casino;

const floatingNavs = [
  {
    id: 1,
    title: "Popular",
    icon: "/images/hoverPopularIcon.svg",
  },
  {
    id: 2,
    title: "Live",
    icon: "/images/liveIcon.svg",
  },
  {
    id: 3,
    title: "Table",
    icon: "/images/tableIcon.svg",
  },
  {
    id: 4,
    title: "Slot",
    icon: "/images/slotIcon.svg",
  },
  {
    id: 5,
    title: "Fishing",
    icon: "/images/fishingIcon.svg",
  },
  {
    id: 6,
    title: "Egame",
    icon: "/images/egameIcon.svg",
  },
];
