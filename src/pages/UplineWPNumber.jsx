import { RxCross2 } from "react-icons/rx";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const UplineWPNumber = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <main className="min-h-full-with-header">
        <div data-v-f43ca18c="" className="pb-20 relative">
          <div data-v-c8836936="" className="mb-20">
            <header
              data-v-c8836936=""
              className="h-12 p-3 bg-black text-white text-lg flex items-center justify-center"
            >
              Upline WhatsApp Number
              <RxCross2
                onClick={() => navigate("/")}
                className="cursor-pointer text-lg absolute right-4"
              />
            </header>
            <div data-v-c8836936="" className="content px-4 py-2">
              <div data-v-c8836936="" className="w-full py-2 text-lg">
                <div data-v-c8836936="">
                  <div
                    data-v-c8836936=""
                    className="ml-2 text-lg font-bold h-[20px] mb-[18px]"
                  >
                    WhatsApp Number
                  </div>
                  <div
                    data-v-c8836936=""
                    className="h-14 px-2 py-[4px] bg-white flex justify-between items-center rounded-xl"
                  >
                    <div data-v-c8836936="" className="ml-2 flex item-center">
                      <FaWhatsapp className="text-teal-400 mr-[5px] text-xl" />
                      <a
                        data-v-c8836936=""
                        href="https://msng.link/o/?+855966553951=wa"
                        className="text-back-600"
                      >
                        +855966553951
                      </a>
                    </div>
                    <a
                      data-v-c8836936=""
                      href="https://msng.link/o/?+855966553951=wa"
                      className="icon-phone-outgoing text-button-normal bg-button-normal text-18 p-3 rounded-lg disabled:bg-black-300 disabled:text-black-600 disabled:cursor-not-allowed"
                    ></a>
                    <div className="bg-yellow-400 p-3 rounded-lg">
                      <MdAddCall
                        onClick={() =>
                          window.open(
                            "https://msng.link/o/?+855966553951=wa",
                            "_blank"
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
                <div data-v-c8836936="" className="mt-[13px]"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default UplineWPNumber;
