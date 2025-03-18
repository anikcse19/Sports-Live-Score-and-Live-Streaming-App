import { RxCross1 } from "react-icons/rx";
import Layout from "../components/Layout/Layout";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const MyProfile = () => {
  const user = JSON.parse(Cookies.get("user"));
  const navigate = useNavigate();

  console.log(user);
  return (
    <Layout>
      <main className="min-h-full-with-header">
        <div data-v-f43ca18c="" className="pb-20 relative">
          <div>
            <header className="h-12 p-3 bg-black text-white  text-lg flex items-center justify-center">
              My Profile
              <div className="icon-close text-16 absolute right-4">
                <RxCross1
                  onClick={() => navigate("/")}
                  className="text-xl font-bold cursor-pointer"
                />
              </div>
            </header>
            <div className="p-4">
              <div className="p-2 relative flex justify-start bg-white border-b border-black-300 rounded-t-lg">
                <span className="w-4/12 text-12 text-global-font-on-light">
                  First Name
                </span>
                <span className="w-auto text-12 text-black-600"></span>
                <div className="px-2 py-1 w-auto absolute right-3 top-1 flex justify-center items-center text-button-normal bg-[#FFC800] rounded-md">
                  <MdEdit className="mr-1 text-11 icon-edit" />
                  <span className="text-11">Edit</span>
                </div>
              </div>
              <div className="p-2 relative flex justify-start bg-white border-b border-black-300">
                <span className="w-4/12 text-12 text-global-font-on-light">
                  Last Name
                </span>
                <span className="w-auto text-12 text-black-600"></span>
                <div className="px-2 py-1 w-auto absolute right-3 top-1 flex justify-center items-center text-button-normal bg-[#FFC800] rounded-md">
                  <MdEdit className="mr-1 text-11 icon-edit" />
                  <span className="text-11">Edit</span>
                </div>
              </div>
              <div className="p-2 flex justify-start bg-white border-b border-black-300">
                <span className="w-4/12 text-12 text-global-font-on-light">
                  Phone Number
                </span>
                <span className="w-auto text-12 text-black-600"></span>
              </div>
              <div className="p-2 relative flex justify-start bg-white border-b border-black-300">
                <span className="w-4/12 text-12 text-global-font-on-light">
                  Email
                </span>
                <span className="w-auto text-12 text-black-600">
                  am@gmail.com
                </span>
                <div className="px-2 py-1 w-auto absolute right-3 top-1 flex justify-center items-center text-button-normal bg-[#FFC800] rounded-md">
                  <MdEdit className="mr-1 text-11 icon-edit" />
                  <span className="text-11">Edit</span>
                </div>
              </div>
              <div className="p-2 relative flex justify-start items-center bg-white rounded-b-lg">
                <span className="w-4/12 text-12 text-global-font-on-light">
                  Password
                </span>
                <span className="w-8/12 text-12 text-black-600">*******</span>
                <div className="px-2 py-1 w-auto absolute right-3 top-1 flex justify-center items-center text-button-normal bg-[#FFC800] rounded-md">
                  <MdEdit className="mr-1 text-11 icon-edit" />
                  <span className="text-11">Edit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MyProfile;
