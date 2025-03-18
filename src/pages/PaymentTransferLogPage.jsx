import Layout from "../components/Layout/Layout";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const PaymentTransferLogPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <main>
        <div className="pb-20 relative">
          <div className="-mb-20">
            <header className="h-12 p-3 bg-black text-white text-14 flex items-center justify-center">
              Payment Transfer Log
              <RxCross2
                onClick={() => navigate("/")}
                className="cursor-pointer text-lg absolute right-4"
              />
            </header>
          </div>
        </div>
        <div className="flex items-center justify-center h-[calc(100vh-300px)] ">
          <div>
            <img
              className="w-[100px] h-[100px]"
              src="/images/noDataImg.avif"
              alt=""
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PaymentTransferLogPage;
