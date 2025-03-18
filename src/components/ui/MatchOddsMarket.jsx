/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { ImStatsBars } from "react-icons/im";
import useSocketHandler from "../../sockets/SocketHandler";
import { useEffect, useState } from "react";
import { fetchDefaultOdds } from "../../sockets/defaultOdds";

const MatchOddsMarket = ({ matchData, id }) => {
  const [eventDefaultData, setEventDefaultData] = useState({});

  const { datas } = useSocketHandler({
    oddsName: "market-odds",
    eventId: id,
    sport: "cricket",
  });

  const eventCurrentData = datas
    ? datas?.marketOdds
    : eventDefaultData?.data?.matchOdds;

  useEffect(() => {
    async function defaultOdds() {
      const dfData = await fetchDefaultOdds(id);
      console.log(dfData, "default data from match odds market");

      setEventDefaultData(dfData);
    }
    defaultOdds();
  }, [id]);

  console.log(datas, "datas from match odds market");

  return (
    <div>
      <div className="h-10 flex items-center justify-between bg-yellow-400 px-3">
        <div className="flex items-center gap-3 text-xl">
          <CiStar />
          <p>Match Odds</p>
        </div>
      </div>

      {matchData?.matchOdds !== null && (
        <div className="px-3 flex flex-col gap-y-0.5">
          <div className="py-1 flex items-center justify-between">
            <div className="flex items-center gap-x-3 w-[60%]"></div>
            <div className="w-[20%] text-center">Back</div>
            <div className="w-[20%] text-center">Lay</div>
          </div>
          {/* runners */}

          <div className="flex flex-col gap-y-0.5 h-full">
            {/* Match Odds Table */}
            {eventCurrentData?.runners?.map((runner, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 mb-0.5 mx-[3px] transition-transform  "
              >
                {/* Event Name */}
                <div className="col-span-3 py-2 pl-2 bg-gray-100">
                  <p className="font-bold text-gray-800 text-xs tracking-wide">
                    {runner?.runner}
                  </p>
                </div>
                {/* Match Ods */}
                <div className="relative col-span-2 grid grid-cols-2">
                  {runner?.back?.slice(0, 1)?.map((backOdd) => (
                    <div
                      key={backOdd?.level}
                      // onClick={() => {
                      //   handleLoginForStakeModal(),
                      //     dispatch(
                      //       getStake({
                      //         odd: {
                      //           ...data,
                      //           betType: "Back",
                      //           odd: layOdd?.price,
                      //           selectionId: runner?.selectionId,
                      //           selectionName: runner?.runner,
                      //         },
                      //       })
                      //     );
                      // }}
                      className="relative flex flex-col text-center min-h-[44px] justify-center font-normal py-1 transition-colors duration-500 bg-blue-400 cursor-pointer"
                    >
                      <span className="leading-4 text-sm font-semibold text-black mb-0.5">
                        {backOdd?.price ? backOdd?.price : "--"}
                      </span>
                      <span className="text-xs font-medium text-black/90">
                        {backOdd?.size ? backOdd?.size : "--"}
                      </span>
                    </div>
                  ))}

                  {runner?.lay?.slice(0, 1)?.map((layOdd) => (
                    <div
                      key={layOdd?.level}
                      // onClick={() => {
                      //   handleLoginForStakeModal(),
                      //     dispatch(
                      //       getStake({
                      //         odd: {
                      //           ...backOdd,
                      //           betType: "Lay",
                      //           odd: backOdd?.price,
                      //           selectionId: runner?.selectionId,
                      //           selectionName: runner?.runner,
                      //         },
                      //       })
                      //     );
                      // }}
                      className="relative flex flex-col text-center min-h-[44px] justify-center font-normal py-1 transition-colors duration-500 bg-pink-400 cursor-pointer"
                    >
                      <span className="leading-4 text-sm font-semibold text-black mb-0.5">
                        {layOdd?.price ? layOdd?.price : "--"}
                      </span>
                      <span className="text-xs font-medium text-black/90">
                        {layOdd?.size ? layOdd?.size : "--"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div>
              <button className="flex items-center gap-x-1 bg-black text-white px-1 py-1 rounded">
                <ImStatsBars className="w-5 h-5 rounded-full bg-white text-black p-0.5" />
                <p className="text-sm">Market Depth</p>
              </button>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 text-sm font-semibold px-2 py-1.5">
              <span className="text-gray-500">Min/Max:</span>
              <span className="text-gray-800 bg-white px-2 py-0.5 rounded-md shadow-sm">
                {eventCurrentData?.matchOdds?.min
                  ? event?.matchOdds?.min
                  : "100"}
                /
                {eventCurrentData?.matchOdds?.max
                  ? event?.matchOdds?.max
                  : "40,000"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchOddsMarket;
