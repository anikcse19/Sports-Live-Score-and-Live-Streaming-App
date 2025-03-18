import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { baseUrl } from "../../../config";

const Today = () => {
  const [totalCricketMatches, setTotalCricketMatches] = useState(0);
  const [totalSoccerMatches, setTotalSoccerMatches] = useState(0);
  const [totalTennisMatches, setTotalTennisMatches] = useState(0);

  const navigate = useNavigate();
  const token = Cookies.get("token");

  const getTodayCricketMatches = async () => {
    try {
      axios
        .get(`${baseUrl}/api/event/event-list?timeFrame=TODAY&sport=CRICKET`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTotalCricketMatches(res?.data?.data?.events.length);
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  const getTodaySoccerMatches = async () => {
    try {
      axios
        .get(`${baseUrl}/api/event/event-list?timeFrame=TODAY&sport=SOCCER`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTotalSoccerMatches(res?.data?.data?.events.length);
        });
    } catch (error) {
      throw new Error(error);
    }
  };
  const getTodayTennisMatches = async () => {
    try {
      axios
        .get(`${baseUrl}/api/event/event-list?timeFrame=TODAY&sport=Tennis`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTotalTennisMatches(res?.data?.data?.events.length);
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getTodayCricketMatches();
    getTodaySoccerMatches();
    getTodayTennisMatches();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {/* all todays matches */}
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner1.webp')`,
        }}
        onClick={() => navigate("/sports")}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5 cursor-pointer"
      >
        <p className="text-xl font-bold text-gray-800">All</p>
        <p className="text-5xl font-bold text-gray-800">
          {totalCricketMatches + totalSoccerMatches + totalTennisMatches}
        </p>
      </div>
      {/* todays cricket matches */}
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner2.webp')`,
        }}
        onClick={() => navigate("/sports")}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5 cursor-pointer"
      >
        <p className="text-xl font-bold text-gray-800">Cricket</p>
        <p className="text-5xl font-bold text-gray-800">
          {totalCricketMatches}
        </p>
      </div>
      {/* todays soccer matches */}
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner3.webp')`,
        }}
        onClick={() => navigate("/sports")}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5 cursor-pointer"
      >
        <p className="text-xl font-bold text-gray-800">Soccer</p>
        <p className="text-5xl font-bold text-gray-800">{totalSoccerMatches}</p>
      </div>
      {/* todays tennis matches */}
      <div
        style={{
          backgroundImage: `url('/images/velkiSportBanner4.webp')`,
        }}
        onClick={() => navigate("/sports")}
        className="bg-white w-full h-32 rounded bg-cover bg-center p-5 cursor-pointer"
      >
        <p className="text-xl font-bold text-gray-800">Tennis</p>
        <p className="text-5xl font-bold text-gray-800">{totalTennisMatches}</p>
      </div>
    </div>
  );
};

export default Today;
