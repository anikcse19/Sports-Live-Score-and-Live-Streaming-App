import { RxCross2 } from "react-icons/rx";
import Layout from "../components/Layout/Layout";
import { FaUpDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DepositPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <main className="min-h-full-with-header">
        <div data-v-f43ca18c="" className="pb-20 relative">
          <div className="-mb-20">
            <header className="h-12 p-3 bg-black text-white text-14 flex items-center justify-center">
              Funds
              <RxCross2
                onClick={() => navigate("/")}
                className="cursor-pointer text-lg absolute right-4"
              />
            </header>
            <div>
              <div
                data-v-276d1645=""
                className="relative py-3 flex items-center justify-center bg-gray-200 h-[40px]"
                // style="--d2594000: 62px;"
              >
                <ul
                  data-v-276d1645=""
                  className="main-filter-ul flex justify-center items-center text-lg"
                >
                  <li
                    data-v-276d1645=""
                    className="main-filter-li relative mx-3.5 font-bold cursor-pointer border-b-4 border-slate-900"
                  >
                    Deposit
                  </li>
                  <li
                    data-v-276d1645=""
                    className="main-filter-li relative mx-3.5 font-bold cursor-pointer"
                  >
                    Withdrawal
                  </li>
                </ul>
              </div>
              <div data-v-ff53742f="" className="mx-[14px]">
                <div className="font-bold text-lg leading-6 py-2 mx-2">
                  Payment Method
                </div>
                <div className="flex items-center flex-wrap bg-white space-y-2 pb-2 text-base font-bold rounded-[10px] mb-4">
                  <div>
                    <div className="mt-2 flex flex-col justify-evenly items-center w-[106px] h-[58px] rounded-[4px] border border-gray-500 leading-4 ml-2">
                      <picture>
                        <img
                          className="w-[25px] h-[25px] object-cover"
                          src="/images/bkashLogo.png"
                          alt="1"
                        />
                      </picture>{" "}
                      bkash
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 flex flex-col justify-evenly items-center w-[106px] h-[58px] rounded-[4px] border border-gray-500 leading-4 ml-2">
                      <picture>
                        <img
                          className="w-[25px] h-[25px] object-cover"
                          src="/images/nagadLogo.png"
                          alt="1"
                        />
                      </picture>{" "}
                      Nagad
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 flex flex-col justify-evenly items-center w-[106px] h-[58px] rounded-[4px] border border-gray-500 leading-4 ml-2">
                      <picture>
                        <img
                          className="w-[25px] h-[25px] object-cover"
                          src="/images/rocketLogo.png"
                          alt="1"
                        />
                      </picture>{" "}
                      Rocket
                    </div>
                  </div>
                  <div>
                    <div className="mt-2 flex flex-col justify-evenly items-center w-[106px] h-[58px] rounded-[4px] border border-gray-500 leading-4 ml-2">
                      <picture>
                        <img
                          className="w-[45px] h-[25px] object-cover"
                          src="/images/upayLogo.png"
                          alt="1"
                        />
                      </picture>{" "}
                      Upay
                    </div>
                  </div>
                </div>
                <div data-v-ff53742f="">
                  <label
                    data-v-ff53742f=""
                    htmlFor="WalletNumber"
                    className="font-bold text-lg leading-6 mx-2"
                  >
                    Your Wallet Number
                  </label>
                  <div
                    data-v-ff53742f=""
                    className="flex flex-col my-2 bg-white rounded-[10px] px-2"
                  >
                    <input
                      data-v-ff53742f=""
                      id="WalletNumber"
                      name="WalletNumber"
                      label="WalletNumber"
                      maxLength="11"
                      type="tel"
                      inputMode="none"
                      readOnly=""
                      className="my-2 relative w-full h-[40px] border border-solid border-slate-600 rounded-[8px] pl-2 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:border-0"
                      disabled=""
                    />
                  </div>
                </div>
                <div
                  data-v-ff53742f=""
                  className="flex items-center justify-between py-2 mx-2"
                >
                  <div
                    data-v-ff53742f=""
                    className="text-lg font-bold leading-6"
                  >
                    Deposit Amount
                  </div>
                  <div
                    data-v-ff53742f=""
                    className="flex items-end justify-center text-slate-600"
                  >
                    <FaUpDown
                      data-v-ff53742f=""
                      className=" px-1 text-lg cursor-pointer"
                    />
                    <div
                      data-v-ff53742f=""
                      className="font-bold text-base leading-[11px]"
                    >
                      ৳ 0 - ৳ 0
                    </div>
                  </div>
                </div>
                <div
                  data-v-ff53742f=""
                  className="bg-white p-2 pb-[8px] rounded-[10px]"
                >
                  <div
                    data-v-ff53742f=""
                    className="flex flex-1 justify-between w-full gap-x-1"
                  >
                    <button
                      data-v-ff53742f=""
                      className="bg-slate-200 w-full p-3 font-bold rounded flex justify-center items-center disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed  h-[30px] border-0"
                      disabled=""
                    >
                      ৳ 1,000
                    </button>
                    <button
                      data-v-ff53742f=""
                      className="bg-slate-200 p-3 font-bold rounded flex justify-center items-center disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed w-full h-[30px] border-0"
                      disabled=""
                    >
                      ৳ 5,000
                    </button>
                    <button
                      data-v-ff53742f=""
                      className="bg-slate-200 p-3 font-bold rounded flex justify-center items-center disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed w-full h-[30px] border-0"
                      disabled=""
                    >
                      ৳ 10,000
                    </button>
                    <button
                      data-v-ff53742f=""
                      className="bg-slate-200 p-3 font-bold rounded flex justify-center items-center disabled:bg-slate-300 disabled:text-slate-600 disabled:cursor-not-allowed w-full h-[30px] border-0"
                      disabled=""
                    >
                      {" "}
                      ৳ 15,000
                    </button>
                  </div>
                  <div
                    data-v-ff53742f=""
                    className="flex justify-between items-center gap-2 truncate rounded-[4px] text-lg font-bold p-2 my-2 h-[40px] border-[2px] bg-slate-300 border-none"
                  >
                    <div data-v-ff53742f="">৳</div>
                    <input
                      data-v-ff53742f=""
                      className="w-full text-right bg-slate-300 disabled:cursor-not-allowed disabled:border-0 outline-none"
                      type="text"
                      id="formattedAmount"
                      disabled=""
                    />
                  </div>
                  <div className="flex items-center justify-end text-14 text-black-600">
                    <div>You will pay</div>
                    <div className="font-bold mx-2"> ৳ 0</div>
                    <div>to get</div>
                    <div className="font-bold mx-2">PBU 0.00</div>
                  </div>
                </div>
                <div
                  data-v-ff53742f=""
                  className="bg-white my-4 rounded-10px p-2"
                >
                  <div
                    data-v-ff53742f=""
                    className="flex justify-between items-center border-b pb-2 border-black-300"
                  >
                    <div data-v-ff53742f="" className="text-15 font-bold">
                      Gentle reminder
                    </div>
                    <div
                      data-v-ff53742f=""
                      className="openReminderButton inline-flex items-center justify-center bg-white text-9 cursor-pointer w-33px h-22px rounded-4px"
                    >
                      <i
                        data-v-ff53742f=""
                        className="icon-arrow-double text-black-700 transition-transform origin-center duration-300 transform rotate-180"
                      ></i>
                    </div>
                  </div>
                  <div
                    data-v-ff53742f=""
                    className="text-12 py-2 px-4px leading-6"
                  >
                    <div>
                      <div>
                        Dear all member, to speed up your deposit process,
                        kindly follow these steps:
                      </div>
                      <ul className="list-decimal px-5">
                        <li>verify the account number you used for deposit.</li>
                        <li>Input the correct reference number.</li>
                        <li>Process only selected amount.</li>
                        <li>Attach the successful Slip.</li>
                      </ul>
                      <div>Reminder:</div>
                      <div>
                        Do not save the phone number displayed on Velki website
                        on your device to avoid losing money.
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  data-v-ff53742f=""
                  className="btn-normal p-3 font-bold rounded flex justify-center items-center disabled:bg-black-300 disabled:text-black-600 disabled:cursor-not-allowed w-full h-40px text-base my-2"
                  disabled=""
                ></button>
              </div>
            </div>
          </div>
          <div data-v-555730cf="" className="setting-wrapper">
            <div
              data-v-555730cf=""
              className="setting fixed z-40 container bottom-0 payment-shadow rounded-t-[12px]"
              style={{
                display: "none",
              }}
            >
              <div
                data-v-555730cf=""
                className="setting-content bg-secondary flex flex-col px-3px pb-0 h-full overscroll-y-none rounded-t-[12px]"
              >
                <div
                  data-v-555730cf=""
                  className="setting-header flex justify-center items-center py-15px px-14px"
                >
                  <div
                    data-v-555730cf=""
                    className="setting-title text-pop-title font-bold text-13"
                  >
                    Keyboard
                  </div>
                  <div
                    data-v-555730cf=""
                    className="icon-close cursor-pointer text-global-font-on-dark text-14 absolute right-[14px]"
                  ></div>
                </div>
                <div data-v-555730cf="" className="keyboard">
                  <div
                    data-v-555730cf=""
                    className="num grid grid-cols-3 gap-2px bg-white p-2 rounded-t-[12px]"
                  >
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="1"
                    >
                      1
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="2"
                    >
                      2
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="3"
                    >
                      3
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="4"
                    >
                      4
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="5"
                    >
                      5
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="6"
                    >
                      6
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="7"
                    >
                      7
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="8"
                    >
                      8
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="9"
                    >
                      9
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                    ></button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn"
                      type="button"
                      value="0"
                    >
                      0
                    </button>
                    <button
                      data-v-555730cf=""
                      className="calc-btn icon-backspace text-25"
                      type="button"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-5837125a=""
            className="loading-wrapper fixed left-0 top-0 z-50 w-full h-full flex justify-center items-center text-xl text-center text-primary"
            style={{
              display: "none",
            }}
          >
            <div
              data-v-5837125a=""
              className="loading-body w-28 h-28 flex justify-center items-center border border-solid border-primary rounded-lg"
            >
              <div
                data-v-5837125a=""
                className="loading-spinner relative w-1/2"
              ></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DepositPage;
