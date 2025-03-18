// import React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { baseUrl } from "../../config";
import Cookies from "js-cookie";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const ActivityLogs = () => {
  const [activityLogs, setActivityLogs] = useState([]);

  const token = Cookies.get("token");
  const navigate = useNavigate();

  const fetchActivityLogs = async () => {
    await axios
      .get(`${baseUrl}/api/user/activity-logs?page=1&perPage=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActivityLogs(res?.data?.data?.data);
      });
  };

  useEffect(() => {
    fetchActivityLogs();
  }, []);

  console.log(activityLogs);

  function convertTimestamp(input) {
    // Parse the input timestamp
    const date = new Date(input);

    // Adjust hours, minutes, and seconds to match the target
    date.setHours(17, 38, 0);

    // Format the date and time
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  return (
    <Layout>
      <main className="min-h-full-with-header">
        <div className="pb-20 relative">
          <div>
            {/* header */}
            <header
              data-v-e313196e=""
              className="h-12 p-3 bg-black text-white text-14 flex items-center justify-center"
            >
              Active Log
              <div className="icon-close text-16 absolute right-4">
                <RxCross1
                  onClick={() => navigate("/")}
                  className="font-bold cursor-pointer"
                />
              </div>
            </header>
            {/* dropdown */}
            <div className="w-full h-fit py-2 bg-[#262C32] p-2">
              <select
                className="w-full py-2 font-bold text-xl border-2 border-[#FFC800] outline-none bg-transparent text-[#FFC800] px-5"
                name=""
                id=""
              >
                <option className="bg-[#262C32] hover:bg-[#262C32]" value="">
                  Activity Log
                </option>
                <option className="bg-[#262C32] hover:bg-[#262C32]" value="">
                  Change Password
                </option>
              </select>
            </div>
            {/* activity logs */}
            <div className="p-4">
              <div data-v-e313196e="">
                {activityLogs?.map((activity, i) => (
                  <div key={i} data-v-e313196e="" className="mb-2 break-all">
                    <div
                      data-v-e313196e=""
                      className="py-5px px-2 bg-[#D5F2B8] leading-130% text-12 text-global-font-on-light rounded-t-lg success-header"
                    >
                      {convertTimestamp(activity?.logInAt)}
                    </div>
                    <div
                      data-v-e313196e=""
                      className="p-2 bg-white border-b border-black-300"
                    >
                      <p
                        data-v-e313196e=""
                        className="text-11 text-global-font-on-light"
                      >
                        Login Status
                      </p>
                      <p
                        data-v-e313196e=""
                        className="text-base font-bold text-[#98cc63]"
                      >
                        Login Success
                      </p>
                    </div>
                    <div
                      data-v-e313196e=""
                      className="p-2 flex justify-start items-center bg-white border-b border-black-300"
                    >
                      <span
                        data-v-e313196e=""
                        className="mr-4 w-4/12 text-12 text-global-font-on-light"
                      >
                        IP Address
                      </span>
                      <span
                        data-v-e313196e=""
                        className="w-8/12 text-12 text-black-600"
                      >
                        {activity?.ip}
                      </span>
                    </div>
                    <div
                      data-v-e313196e=""
                      className="p-2 flex justify-start items-start bg-white border-b border-black-300"
                    >
                      <span
                        data-v-e313196e=""
                        className="mr-4 w-4/12 text-12 text-global-font-on-light"
                      >
                        ISP
                      </span>
                      <span
                        data-v-e313196e=""
                        className="w-8/12 text-12 text-black-600"
                      >
                        {activity?.isp}
                      </span>
                    </div>
                    <div
                      data-v-e313196e=""
                      className="p-2 flex justify-start items-start bg-white rounded-b-lg"
                    >
                      <span
                        data-v-e313196e=""
                        className="mr-4 w-4/12 text-12 text-global-font-on-light"
                      >
                        City/State/Country
                      </span>
                      <span
                        data-v-e313196e=""
                        className="w-8/12 text-12 text-black-600 leading-16px"
                      >
                        {activity?.address?.city}, {activity?.address?.state},
                        {activity?.address?.country}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div data-v-e313196e=""></div>
              <div
                data-v-e313196e=""
                className="flex justify-center items-center py-48"
                style={{
                  display: "none",
                }}
              >
                <div className="pt-6 px-7 pb-5 bg-white text-center text-black-700 text-base rounded-xl leading-tight">
                  <div
                    alt=""
                    className="icon-empty text-40 text-black-300 m-auto mb-2.5"
                  ></div>
                  <div>No Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ActivityLogs;
