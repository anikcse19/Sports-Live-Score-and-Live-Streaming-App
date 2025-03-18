import { CiStar } from "react-icons/ci";
import Layout from "../components/Layout/Layout";
import { FaArrowsUpDown } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { ImStatsBars } from "react-icons/im";
import useSocketHandler from "../sockets/SocketHandler";
import FancyMarket from "../components/ui/FancyMarket";
import MatchOddsMarket from "../components/ui/MatchOddsMarket";
import BookMakersMarket from "../components/ui/BookMakersMarket";

const MatchDetails = () => {
  const [matchData, setMatchData] = useState([]);
  const [totalMatchedVlaue, setTotalMatchedValue] = useState(0);
  const [teams, setTeams] = useState([]);
  const { id } = useParams();

  // const dispatch = useDispatch();
  const { datas } = useSocketHandler({
    oddsName: "bookmaker-odds",
    eventId: id,
    sport: "cricket",
  });

  // console.log(datas, "da");

  const token = Cookies.get("token");

  const fetchSingleMatchDetails = async () => {
    await axios
      .get(`${baseUrl}/api/event/odds/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setMatchData(res?.data?.data);
        const names = res?.data?.data?.eventTitle.split("v");
        setTeams(names);
      });
  };

  useEffect(() => {
    fetchSingleMatchDetails();

    axios.get(`${baseUrl}/api/event/odds/${id}`).then((res) => {
      console.log(res?.data?.data?.matchOdds?.totalMatched);

      setTotalMatchedValue(res?.data?.data?.matchOdds?.totalMatched);
    });
  }, []);

  return (
    <Layout>
      {/* match name */}
      <div className="w-full h-10 bg-white flex items-center">
        <div className="w-full px-10 font-bold flex justify-between items-center">
          <p>{teams[0]}</p>
          <p>-</p>
          <p>{teams[1]}</p>
        </div>
      </div>
      {/* exchange */}
      <div className="w-full h-10 bg-black text-white flex items-center">
        <div className="w-full px-3 flex justify-between items-center">
          <div>Exchange</div>
          <div className="flex items-center gap-x-2">
            <p className="text-yellow-400 text-sm">Matched</p>
            <p className="text-yellow-500 font-bold">PTE {totalMatchedVlaue}</p>
          </div>
        </div>
      </div>
      {/* match odds */}
      <MatchOddsMarket matchData={matchData} id={id} />

      {/* bookmakers */}
      <BookMakersMarket id={id} />

      {/* fancy */}
      <FancyMarket id={id} />
    </Layout>
  );
};

export default MatchDetails;
