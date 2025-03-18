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
import { useNavigate } from "react-router-dom";

const TennisMatches = () => {
  const [openMatchDetails, setOpenMatchDetails] = useState([]);
  const [openAllMatchDetails, setOpenAllMatchDetails] = useState(false);
  const [tennisMatches, setTennisMatches] = useState([]);
  const [filteredInPlayTennisMtaches, setFilteredInPlayTennisMatches] =
    useState([]);

  const token = Cookies.get("token");
  const navigate = useNavigate();

  const fetchTennisMatches = async () => {
    try {
      axios
        .get(`${baseUrl}/api/event?sport=TENNIS&site=${supportSite}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res?.data?.message === "success") {
            setTennisMatches(res?.data?.data?.competitionEvents);
          }
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchTennisMatches();
  }, []);

  useEffect(() => {
    const filteredMatches = [];
    tennisMatches.forEach((match) => {
      match.events.forEach((event) => {
        if (event.isInPlay) {
          filteredMatches.push(match);
        }
      });
    });
    setFilteredInPlayTennisMatches(filteredMatches);
  }, [tennisMatches]);

  return (
    <div className="flex flex-col gap-4 px-4 pt-3 py-3">
      {/* Tennis */}
      <div className="">
        {/* heading */}
        <div className="flex items-center justify-between my-5">
          <div className="px-3 font-bold text-xl border-l-4 border-black rounded">
            Tennis
          </div>
          <div
            onClick={() => {
              if (openAllMatchDetails) {
                setOpenMatchDetails([]);
              } else {
                setOpenMatchDetails(
                  filteredInPlayTennisMtaches.map(
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
        {filteredInPlayTennisMtaches.length === 0 && (
          <div className="p-3 rounded-2xl text-center flex flex-col items-center justify-center gap-2">
            <img width={100} src="/images/noDataImg.avif" alt="" />
            <p>No data</p>
          </div>
        )}
        <div className="flex flex-col gap-y-4">
          {filteredInPlayTennisMtaches?.map((match, i) => (
            <div
              key={i}
              className={`${
                openMatchDetails.includes(match?.competition.id)
                  ? "h-fit"
                  : "h-14 md:h-12"
              }  transition-all bg-white rounded-2xl  duration-300 ease-in overflow-hidden `}
            >
              {/* series type */}
              <div className="bg-black text-yellow-400 p-3 rounded-tl-2xl cursor-pointer font-bold text-base flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="bg-yellow-300 text-black px-4  text-center rounded-2xl">
                    {match?.events?.length}
                  </p>
                  <p className="text-sm">{match?.competition?.name}</p>
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
              {match.events.map((event, i) => (
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
                    className="py-2 px-3 flex items-center text-lg justify-between border-b border-gray-400"
                  >
                    <div className="flex items-center gap-x-2">
                      <CiStar />
                      <p className="text-sm md:text-base">{event?.name}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <HiOutlineChevronRight />
                    </div>
                  </div>
                  {event?.matchOdds !== null && (
                    <div className="p-3 flex flex-col gap-y-0.5">
                      <div className="bg-yellow-400 py-1 px-3 rounded-tl-xl rounded-tr-xl flex items-center justify-between">
                        <div className="flex items-center gap-1 md:gap-x-3 w-[70%]  border-r-2 border-black">
                          <p className="text-sm md:text-xl">Match Odds</p>
                          <p className="text-xs">
                            Mathced {event.matchOdds?.totalMatched}
                          </p>
                        </div>
                        <div className="w-[15%] text-center text-sm md:text-xl">
                          Back
                        </div>
                        <div className="w-[15%] text-center text-sm md:text-xl">
                          Lay
                        </div>
                      </div>
                      {/* runners */}

                      <div className="flex flex-col gap-y-0.5">
                        {event?.matchOdds?.runners.map((runner, i) => (
                          <div
                            key={i}
                            className="bg-gray-200  px-3  flex items-center justify-between gap-x-1"
                          >
                            <div className="flex items-center gap-x-3 w-[70%]">
                              <p className="text-sm md:text-xl font-bold text-slate-800 ">
                                {runner.runner}
                              </p>
                            </div>
                            <div className="w-[15%] text-center bg-blue-300 rounded-md py-0.5 flex flex-col items-center">
                              <p className="text-sm font-bold">
                                {runner?.back[0]?.price}
                              </p>
                              <p className="text-xs">{runner?.back[0]?.size}</p>
                            </div>
                            <div className="w-[15%] text-center bg-red-300 rounded-md py-0.5 flex flex-col items-center">
                              <p className="text-xs md:text-sm font-bold">
                                {runner?.lay[0]?.price}
                              </p>
                              <p className="text-xs">{runner?.lay[0]?.size}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TennisMatches;
