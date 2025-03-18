import { RxCross2 } from "react-icons/rx";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const CurrentBetsPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <main className="min-h-full-with-header">
        <div data-v-f43ca18c="" className="pb-20 relative">
          <div data-v-3da282ba="" className="mb-20">
            <header
              data-v-3da282ba=""
              className="h-12 p-3 bg-black text-white text-lg flex items-center justify-center"
            >
              Current Bets
              <RxCross2
                onClick={() => navigate("/")}
                className="cursor-pointer text-lg absolute right-4"
              />
            </header>
            <section
              data-v-3da282ba=""
              className="tab-wrapper relative bg-slate-200 overflow-x-scroll  py-1"
            >
              <div data-v-3da282ba="" className="h-full inline-block">
                <ul
                  data-v-3da282ba=""
                  className="ml-2 mr-1 w-full h-12 flex flex-nowrap justify-start items-center"
                >
                  <li
                    data-v-3da282ba=""
                    className="text-lg font-bold py-2 mr-6 text-center whitespace-nowrap border-b-4 border-slate-800"
                  >
                    Exchange
                  </li>
                  <li
                    data-v-3da282ba=""
                    className="text-lg font-bold py-2 mr-6 text-center whitespace-nowrap"
                    value="3"
                  >
                    Bookmaker
                  </li>
                  <li
                    data-v-3da282ba=""
                    className="text-lg font-bold py-2 mr-6 text-center whitespace-nowrap"
                    value="7"
                  >
                    Fancybet
                  </li>
                  <li
                    data-v-3da282ba=""
                    className="text-lg font-bold py-2 mr-6 text-center whitespace-nowrap"
                    value="2"
                  >
                    Sportsbook
                  </li>
                  <li
                    data-v-3da282ba=""
                    className="text-lg font-bold py-2 mr-6 text-center whitespace-nowrap"
                    value="8"
                  >
                    Parlay
                  </li>
                  <div
                    data-v-3da282ba=""
                    className="tab-indicator absolute left-0 bottom-1.5 bg-global-font-on-light rounded-full"
                  ></div>
                </ul>
              </div>
            </section>
            <section data-v-3da282ba="" className="bet-status relative">
              <div
                data-v-8a49f53f=""
                data-v-3da282ba=""
                className="custom-select w-full p-2 relative bg-slate-800"
              >
                <button
                  data-v-8a49f53f=""
                  className="select text-left px-4 w-full h-[30px] border rounded border-yellow-400 bg-white bg-opacity-0 text-yellow-400 text-lg"
                  value="options"
                >
                  <div
                    data-v-8a49f53f=""
                    className="relative flex justify-start items-center"
                  >
                    <div
                      data-v-8a49f53f=""
                      className="option-container w-[310px] grid grid-cols-1 justify-start items-center leading-tight"
                      data-has-label="true"
                      data-has-alt="false"
                    >
                      <span data-v-8a49f53f="" className="mr-2">
                        Bet Status
                      </span>
                      <span
                        data-v-8a49f53f=""
                        className="option-context mr-2 font-bold truncate leading-tight"
                      >
                        Matched
                      </span>
                    </div>
                    <span
                      data-v-8a49f53f=""
                      className="icon-arrow-down absolute right-0 top-1.5 text-12 transition-transform origin-center duration-300"
                    ></span>
                  </div>
                </button>
                <div
                  data-v-8a49f53f=""
                  className="drop-down border border-yellow-400 rounded rounded-t-none border-t-0 bg-slate-800 text-yellow-400 font-bold text-lg absolute z-10"
                  style={{
                    display: "",
                  }}
                >
                  <div
                    data-v-8a49f53f=""
                    className="options top-10 flex flex-col"
                  >
                    <p
                      data-v-8a49f53f=""
                      className="item h-30px flex items-center px-4 hover:bg-black-600"
                      value="1"
                      style={{
                        display: "none",
                      }}
                    >
                      <span data-v-8a49f53f="" className="item-text relative">
                        Matched
                      </span>
                    </p>
                    <p
                      data-v-8a49f53f=""
                      className="item h-30px flex items-center px-4 hover:bg-black-600"
                      value="0"
                    >
                      <span data-v-8a49f53f="" className="item-text relative">
                        Unmatched
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-v-3da282ba=""
                className="flex justify-end items-center bg-black-800 h-30px p2"
              >
                <span
                  data-v-3da282ba=""
                  className="title text-15 text-reportForm-main mr-2"
                >
                  Order By
                </span>
                <div data-v-3da282ba="" className="radio-button-group flex">
                  <div data-v-a5fdb595="" data-v-3da282ba="">
                    <input
                      data-v-a5fdb595=""
                      id="betPlaced"
                      name="radio-option"
                      type="radio"
                      className="hidden"
                    />
                    <label
                      data-v-a5fdb595=""
                      htmlFor="betPlaced"
                      className="flex justify-start items-center select-none"
                    >
                      <span
                        data-v-a5fdb595=""
                        className="flex justify-center items-center border border-solid border-checkbox-boder mr-1.5 w-4 h-4 rounded bg-checkbox-checked"
                      >
                        <span
                          data-v-a5fdb595=""
                          className="icon-check text-checkbox-icon text-8 font-bold"
                        ></span>
                      </span>
                      <span
                        data-v-a5fdb595=""
                        className="text-global-font-on-dark mr-2 text-13"
                      >
                        Bet Placed
                      </span>
                    </label>
                  </div>
                  <div data-v-a5fdb595="" data-v-3da282ba="">
                    <input
                      data-v-a5fdb595=""
                      id="market"
                      name="radio-option"
                      type="radio"
                      className="hidden"
                    />
                    <label
                      data-v-a5fdb595=""
                      htmlFor="market"
                      className="flex justify-start items-center select-none"
                    >
                      <span
                        data-v-a5fdb595=""
                        className="flex justify-center items-center border border-solid border-checkbox-boder mr-1.5 w-4 h-4 rounded bg-checkbox-background"
                      >
                        <span
                          data-v-a5fdb595=""
                          className="icon-check text-checkbox-icon text-8 font-bold"
                          style={{
                            display: "none",
                          }}
                        ></span>
                      </span>
                      <span
                        data-v-a5fdb595=""
                        className="text-global-font-on-dark mr-2 text-13"
                      >
                        Market
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
            <div data-v-3da282ba="" className="content px-4 py-4">
              <div data-v-3da282ba=""></div>
              <div
                data-v-3da282ba=""
                className="flex justify-center items-center py-48"
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
            <div
              data-v-3da282ba=""
              className="bg-black-100 p-14px mt-auto fixed bottom-0 w-full"
              style={{
                display: "none",
              }}
            >
              <button className="btn-normal p-3 font-bold rounded flex justify-center items-center disabled:bg-black-300 disabled:text-black-600 disabled:cursor-not-allowed bg-error text-global-font-on-dark w-full rounded-4px">
                <i className="icon-del text-14 mr-3px"></i> Cancel{" "}
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CurrentBetsPage;
