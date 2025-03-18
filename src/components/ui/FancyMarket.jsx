/* eslint-disable react/prop-types */
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowsUpDown } from "react-icons/fa6";
import useSocketHandler from "../../sockets/SocketHandler";

const FancyMarket = ({
  id,
  // sport,
  // fancyMenus,
  // setFancyActive,
  // fancyAcitive,
  // handleLoginForFancyStakeModal,
  // event,
}) => {
  const { datas } = useSocketHandler({
    oddsName: "market-fancy",
    eventId: id,
    sport: "cricket",
  });

  console.log(datas, "datasfrom fancy market");

  if (datas === null) {
    return <div></div>;
  }

  return (
    <div className="mx-2 rounded-md my-3">
      {/* tabs 1 */}
      <div className="h-[42px] flex items-center justify-between bg-black px-3 rounded-tr-xl rounded-tl-xl">
        <div className="flex items-center gap-3 bg-[#735A00] text-yellow-400 text-lg rounded-tr-md rounded-tl-md mt-2">
          <button className="px-3 py-1 bg-[#FFC800] text-black rounded-tl-md">
            Fancybet
          </button>
          <button className="px-3 py-1">FancyPlus</button>
        </div>
      </div>
      {/* tabs 2 */}
      <div className="w-full h-[42px] bg-[#FFC800] flex items-center">
        <div className="w-full px-4 flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <button className="font-bold border-b-2 border-black">All</button>
            <button>Session</button>
            <button>Ball</button>
          </div>
          <div>
            <FaInfoCircle />
          </div>
        </div>
      </div>
      {/* yes and no */}
      <div className="px-3 flex flex-col gap-y-0.5">
        <div className="py-1 flex items-center justify-between">
          <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black"></div>
          <div className="w-[15%] text-center">No</div>
          <div className="w-[15%] text-center">Yes</div>
        </div>
        {/* runners */}
        <div className="flex flex-col gap-y-0.5 h-full">
          {datas?.marketFancy?.map((fancy, fidx) => (
            <div
              key={fidx}
              className="grid grid-cols-5 gap-1 pb-0 mb-0 px-0 mx-0 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="col-span-3 pl-3 flex items-center space-x-2 bg-gradient-to-r from-gray-200 to-gray-100 py-2 rounded-md shadow-inner">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-yellow-400 w-4 h-4 transform transition-transform duration-300 hover:scale-110"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                    stroke="#0A0A0A"
                    fill="#0A0A0A"
                    strokeWidth="0px"
                  ></path>
                </svg>
                <p className="font-semibold text-xs text-gray-800 tracking-wide transition-all duration-300">
                  {fancy?.RunnerName}
                </p>
              </div>

              {fancy?.GameStatus === "SUSPENDED" ? (
                <div className="relative col-span-2 flex items-center gap-1">
                  <div className="text-white w-full flex flex-col text-center min-h-[50px] justify-center font-semibold text-sm py-1 transition-transform duration-300 transform hover:scale-105 rounded-md bg-gradient-to-br from-red-300 to-red-500 shadow-md hover:shadow-lg">
                    SUSPENDED
                  </div>
                </div>
              ) : (
                <div className="relative col-span-2 flex items-center gap-1">
                  {fancy?.LayPrice1 ? (
                    <div
                      // onClick={() => {
                      //   handleLoginForFancyStakeModal(),
                      //     dispatch(
                      //       getFancyStakeFn({
                      //         ...fancy,
                      //         betType: "NO",
                      //         openDate: event?.data?.openDate,
                      //       })
                      //     );
                      // }}
                      className="w-full flex flex-col text-center min-h-[44px] justify-center font-semibold text-sm py-1 transition-transform duration-300 transform hover:scale-105 rounded-md bg-gradient-to-br from-pink-300 to-pink-500 shadow-md hover:shadow-lg"
                    >
                      <span className="text-sm text-white font-bold">
                        {fancy?.LayPrice1}
                      </span>
                      <span className="text-[10px] text-white">
                        {fancy?.LaySize1}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col text-center min-h-[44px] justify-center font-semibold text-sm py-1 transition-transform duration-300 transform hover:scale-105 rounded-md bg-gradient-to-br from-pink-300 to-pink-500 shadow-md hover:shadow-lg">
                      <span className="text-sm text-white font-bold">--</span>
                      <span className="text-[10px] text-white">--</span>
                    </div>
                  )}

                  {fancy?.BackPrice1 ? (
                    <div
                      // onClick={() => {
                      //   handleLoginForFancyStakeModal(),
                      //     dispatch(
                      //       getFancyStakeFn({
                      //         ...fancy,
                      //         betType: "YES",
                      //         openDate: event?.data?.openDate,
                      //       })
                      //     );
                      // }}
                      className="w-full flex flex-col text-center min-h-[44px] justify-center font-semibold text-sm py-1 transition-transform duration-300 transform hover:scale-105 rounded-md bg-gradient-to-br from-blue-300 to-blue-500 shadow-md hover:shadow-lg"
                    >
                      <span className="text-sm text-white font-bold">
                        {fancy?.BackPrice1 ? fancy?.BackPrice1 : "--"}
                      </span>
                      <span className="text-[10px] text-white">
                        {fancy?.BackSize1 ? fancy?.BackSize1 : "--"}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full flex flex-col text-center min-h-[44px] justify-center font-semibold text-sm py-1 transition-transform duration-300 transform hover:scale-105 rounded-md bg-gradient-to-br from-blue-300 to-blue-500 shadow-md hover:shadow-lg">
                      <span className="text-sm text-white font-bold">--</span>
                      <span className="text-[10px] text-white">--</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaArrowsUpDown className="w-5 h-5 bg-gray-400 p-0.5 rounded-full text-white" />
            <p>min/max</p>
            <p className="font-bold">1/123123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyMarket;
