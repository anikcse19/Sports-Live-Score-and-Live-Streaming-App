import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import {
  HiChevronDown,
  HiChevronUp,
  HiMiniChevronDoubleDown,
  HiMiniChevronDoubleUp,
  HiOutlineChevronRight,
} from "react-icons/hi2";
import Cookies from "js-cookie";
import axios from "axios";
import { baseUrl, supportSite } from "../../../../config";
import useStore from "../../../Zustand/useStore";
import { useNavigate } from "react-router-dom";

const CricketMatches = () => {
  const [openMatchDetails, setOpenMatchDetails] = useState([]);
  const [openAllMatchDetails, setOpenAllMatchDetails] = useState(false);
  const [cricketMatches, setCricketMatches] = useState([]);

  const { isBackLayoutOpen, setIsBackLayoutOpen } = useStore();
  const [filteredInPlayCricketMtaches, setFilteredInPlayCricketMatches] =
    useState([]);

  const token = Cookies.get("token");
  const navigate = useNavigate();

  const fetchCricketMatches = async () => {
    try {
      axios
        .get(`${baseUrl}/api/event?sport=CRICKET&site=${supportSite}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res?.data?.message === "success") {
            setCricketMatches(res?.data?.data?.competitionEvents);
          }
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchCricketMatches();
  }, []);

  useEffect(() => {
    const filteredMatches = [];
    cricketMatches.forEach((match) => {
      match.events.forEach((event) => {
        if (event.isInPlay) {
          filteredMatches.push(match);
        }
      });
    });
    setFilteredInPlayCricketMatches(filteredMatches);
  }, [cricketMatches]);

  return (
    <div className="flex flex-col gap-4 px-4 pt-3 py-3">
      {/* cricket */}
      <div className="">
        {/* heading */}
        <div className="flex items-center justify-between my-5">
          <div className="px-3 font-bold text-xl border-l-4 border-black rounded">
            Cricket
          </div>
          <div
            onClick={() => {
              if (openAllMatchDetails) {
                setOpenMatchDetails([]);
              } else {
                setOpenMatchDetails(
                  filteredInPlayCricketMtaches.map(
                    (match) => match.competition.id
                  )
                );
              }
              setOpenAllMatchDetails(!openAllMatchDetails);
            }}
            className="bg-white px-3 py-0.5 text-sm text-gray-500 flex items-center gap-x-2 rounded-md"
          >
            <p>All</p>
            {openAllMatchDetails ? (
              <HiMiniChevronDoubleUp />
            ) : (
              <HiMiniChevronDoubleDown />
            )}
          </div>
        </div>
        {/* body */}
        {/* if there have no match */}
        {filteredInPlayCricketMtaches.length === 0 && (
          <div className="p-3 rounded-2xl text-center flex flex-col items-center justify-center gap-2">
            <img width={100} src="/images/noDataImg.avif" alt="" />
            <p>No data</p>
          </div>
        )}
        <div className="flex flex-col gap-y-4">
          {filteredInPlayCricketMtaches?.map((match, i) => (
            <div
              key={i}
              className={`${
                openMatchDetails.includes(match?.competition.id)
                  ? "h-fit"
                  : "h-14 md:h-12"
              }  transition-all bg-white rounded-2xl  duration-300 ease-in overflow-hidden `}
            >
              {/* series type */}
              <div className="h-full bg-black text-yellow-400 p-3 rounded-tl-2xl cursor-pointer font-bold text-base flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="bg-yellow-300 text-black px-4  text-center rounded-2xl">
                    {match?.events?.length}
                  </p>
                  <p className="text-sm md:text-xl">
                    {match?.competition?.name}
                  </p>
                </div>
                <div>
                  {openMatchDetails.includes(match.competition.id) ? (
                    <HiChevronUp
                      onClick={() => {
                        setOpenMatchDetails((prev) =>
                          prev.filter((id) => id !== match.competition.id)
                        );
                      }}
                      className="text-2xl"
                    />
                  ) : (
                    <HiChevronDown
                      onClick={() =>
                        setOpenMatchDetails((prev) => [
                          ...prev,
                          match.competition.id,
                        ])
                      }
                      className="text-2xl"
                    />
                  )}
                </div>
              </div>
              {match.events.map((event, i) => {
                if (event?.isInPlay) {
                  return (
                    <div key={i}>
                      {event?.isInPlay && (
                        <div className="px-3 pt-2">
                          <button className="bg-green-400 text-white px-1 rounded-sm text-xs">
                            In Play
                          </button>
                        </div>
                      )}
                      {/* match title */}
                      <div
                        onClick={() => {
                          navigate(`/match-details/${event?.id}`);
                        }}
                        className="py-2 px-3 flex items-center text-lg justify-between"
                      >
                        <div className="flex items-center gap-x-2">
                          <CiStar />
                          <p className="text-sm md:text-xl">{event?.name}</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <HiOutlineChevronRight />
                        </div>
                      </div>
                      {event?.matchOdds !== null && (
                        <div className="p-3 flex flex-col gap-y-0.5">
                          <div className="bg-yellow-400 py-1 px-3 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
                            <div className="flex items-center gap-x-3 w-[70%]  border-r-2 border-black">
                              <p className="text-xs md:text-sm">Match Odds</p>
                              <p className="text-xs">
                                Mathced {event.matchOdds?.totalMatched}
                              </p>
                            </div>
                            <div className="w-[15%] text-center text-xs md:text-sm">
                              Back
                            </div>
                            <div className="w-[15%] text-center text-xs md:text-sm">
                              Lay
                            </div>
                          </div>
                          {/* runners */}

                          <div className="flex flex-col gap-y-0.5 h-full">
                            {event?.matchOdds?.runners.map((runner, i) => (
                              <div
                                key={i}
                                className="bg-blue-200 h-full flex items-center justify-between gap-x-1"
                              >
                                <div className="w-[70%] flex items-center gap-x-3 px-3">
                                  <p className="text-xs md:text-sm font-bold text-slate-800">
                                    {runner.runner}
                                  </p>
                                </div>
                                <div className="w-[30%] h-12 flex gap-x-1">
                                  <div className="w-[50%] h-full">
                                    {/* {runner?.back?.length > 0 && ( */}
                                    <div className="w-full h-full text-center bg-blue-300 rounded-md py-2 flex flex-col items-center">
                                      <button
                                        onClick={() => {
                                          setIsBackLayoutOpen({
                                            status: true,
                                            elements: runner,
                                          });
                                        }}
                                        className="text-xs md:text-sm font-bold"
                                      >
                                        {runner?.back[0]?.price}
                                      </button>
                                      <p className="text-xs">
                                        {runner?.back[0]?.size}
                                      </p>
                                    </div>
                                    {/* )} */}
                                  </div>
                                  <div className="w-[50%] h-full ">
                                    {/* {runner?.lay?.length > 0 && ( */}
                                    <div className="w-full h-full text-center bg-red-300 rounded-md py-2 flex flex-col items-center">
                                      <p className="text-xs md:text-sm font-bold">
                                        {runner?.lay[0]?.price}
                                      </p>
                                      <p className="text-xs">
                                        {runner?.lay[0]?.size}
                                      </p>
                                    </div>
                                    {/* )} */}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CricketMatches;
