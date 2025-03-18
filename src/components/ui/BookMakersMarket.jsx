/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { FaArrowsUpDown } from "react-icons/fa6";
import useSocketHandler from "../../sockets/SocketHandler";

const BookMakersMarket = ({ id }) => {
  const { datas } = useSocketHandler({
    oddsName: "bookmaker-odds",
    eventId: id,
    sport: "cricket",
  });

  console.log(datas, "datas from bookmakers market");

  if (datas === null) {
    return <div></div>;
  }

  return (
    <div className="mx-2 rounded-md my-3">
      <div className="h-10 flex items-center justify-between bg-yellow-400 px-3 rounded-tr-xl rounded-tl-xl">
        <div className="flex items-center gap-3 text-xl">
          <CiStar />
          <p>Bookmakers</p>
        </div>
      </div>

      {/* back and lay */}

      <div className="px-3 flex flex-col gap-y-0.5">
        <div className="py-1 flex items-center justify-between">
          <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black"></div>
          <div className="w-[15%] text-center">Back</div>
          <div className="w-[15%] text-center">Lay</div>
        </div>
        {/* runners */}

        <div className="flex flex-col gap-y-0.5 h-full">
          {datas?.bookmakerOdds ? (
            datas?.bookmakerOdds?.runners?.map((runner) => (
              <div
                key={runner?.selectionId}
                className="grid grid-cols-5 mb-0.5 mx-1 cursor-not-allowed transition-transform duration-200"
              >
                <div className="col-span-3 py-2 px-2 bg-teamNameBgColor">
                  <p className="font-medium text-gray-800 text-xs tracking-wide">
                    {runner?.runnerName}
                  </p>
                </div>

                {runner?.back ? (
                  runner?.back?.slice(0, 1)?.map((backOdd, index) => (
                    <div
                      key={backOdd?.level + index}
                      // onClick={() => {
                      //   handleLoginForStakeModal(),
                      //     dispatch(
                      //       getStake({
                      //         odd: {
                      //           ...backOdd,
                      //           type: "back",
                      //           runner: runner?.runnerName,
                      //         },
                      //       })
                      //     );
                      // }}
                      className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-blue-500 hover:bg-blue-600 cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-white">
                        {backOdd?.price}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-blue-500 hover:bg-blue-600">
                    <span className="text-sm font-semibold text-white">--</span>
                    <span className="text-sm font-semibold text-white">--</span>
                  </div>
                )}

                {runner?.lay ? (
                  runner?.lay?.slice(0, 1)?.map((layOdd, index) => (
                    <div
                      key={layOdd?.level + index}
                      // onClick={() => {
                      //   handleLoginForStakeModal(),
                      //     dispatch(
                      //       getStake({
                      //         odd: {
                      //           ...layOdd,
                      //           type: "lay",
                      //           runner: runner?.runnerName,
                      //         },
                      //       })
                      //     );
                      // }}
                      className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-pink-500 hover:bg-pink-600 "
                    >
                      <span className="text-sm font-semibold text-white">
                        {layOdd?.price}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-pink-500 hover:bg-pink-600">
                    <span className="text-sm font-semibold text-white">--</span>
                    <span className="text-sm font-semibold text-white">--</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            //If Bookmarks Not available
            <div className="grid grid-cols-5 mb-0.5 mx-1 cursor-not-allowed transition-transform duration-200">
              <div className="col-span-3 py-2 px-2 bg-teamNameBgColor">
                <p className="font-medium text-gray-800 text-xs tracking-wide">
                  {event?.data?.eventTitle}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-blue-500 hover:bg-blue-600">
                <span className="text-sm font-semibold text-white">--</span>
              </div>

              <div className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-pink-500 hover:bg-pink-600">
                <span className="text-sm font-semibold text-white">--</span>
              </div>

              <div className="col-span-3 py-2 px-2 bg-teamNameBgColor">
                <p className="font-medium text-gray-800 text-xs tracking-wide">
                  {event?.data?.eventTitle}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-blue-500 hover:bg-blue-600">
                <span className="text-sm font-semibold text-white">--</span>
              </div>
              <div className="flex flex-col items-center justify-center min-h-[44px] py-1.5 font-normal transition-all duration-300 bg-pink-500 hover:bg-pink-600">
                <span className="text-sm font-semibold text-white">--</span>
              </div>
            </div>
          )}
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

export default BookMakersMarket;
