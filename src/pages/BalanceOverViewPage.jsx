import { RxCross2 } from "react-icons/rx";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const BalanceOverViewPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <main className="min-h-full-with-header">
        <div data-v-f43ca18c="" className="pb-20 relative">
          <div className="mb-20">
            <header className="h-12 p-3 bg-black text-white text-lg flex items-center justify-center">
              Balance Overview
              <RxCross2
                onClick={() => navigate("/")}
                className="cursor-pointer text-lg absolute right-4"
              />
            </header>
            <div className="content px-4 py-4">
              <section className="bg-slate-800 px-4 pt-4 pb-2 mb-4 rounded-xl text-white font-bold">
                <div className="text-14 mb-2">Your Balances</div>
                <div className="flex">
                  <span className="currency-alias bg-yellow-400 rounded text-10 px-1.5 py-0.5 mr-2 leading-snug text-black self-center">
                    PBU
                  </span>
                  <span className="balance text-22 mb-0.5">0</span>
                </div>
              </section>
              <div className="flex items-center justify-center h-[400px] ">
                <div>
                  <img
                    className="w-[100px] h-[100px]"
                    src="/images/noDataImg.avif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BalanceOverViewPage;
