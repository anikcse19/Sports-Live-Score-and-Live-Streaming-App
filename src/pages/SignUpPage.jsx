import { FaChevronLeft, FaEyeSlash } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url('/images/loginBg.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[500px] mx-auto min-h-screen  relative"
    >
      {/* back button */}
      <div className=" p-3">
        <FaChevronLeft
          onClick={() => navigate("/")}
          className="w-10 h-10 bg-white rounded-full p-2 cursor-pointer"
        />
      </div>
      {/* logo */}
      <div className="flex justify-center  p-3">
        <img className="w-[50%] " src="/images/velki-logo.webp" alt="" />
      </div>

      {/* form */}
      <div className="my-5 bg-white rounded-lg">
        <div className="py-8">
          {/* signup title */}
          <div className="flex justify-center">
            <p className="text-3xl">Sign Up</p>
          </div>

          {/* all fields */}
          <div className="w-[90%] mx-auto flex flex-col gap-y-8 my-10">
            {/* username */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="username"
                >
                  Username
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <FaUserAlt className="absolute top-[50%] -translate-y-1/2 left-3" />
                <input
                  type="text"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
              <p className="p-1 text-xs text-yellow-600">
                4-13 Characters or Number
              </p>
            </div>
            {/* password */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="password"
                >
                  Password
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <IoIosUnlock className="absolute top-[50%] -translate-y-1/2 left-3 text-lg" />
                <FaEyeSlash className="absolute top-[50%] -translate-y-1/2 right-3 text-lg" />
                <input
                  type="password"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
              <p className="p-1 text-xs text-yellow-600">
                8 to 15 characters, and must include at least 1 capital letter
                and numbers
              </p>
            </div>

            {/* confirm password */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="confirm_password"
                >
                  Confirm Password
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <IoIosUnlock className="absolute top-[50%] -translate-y-1/2 left-3 text-lg" />
                <FaEyeSlash className="absolute top-[50%] -translate-y-1/2 right-3 text-lg" />
                <input
                  type="password"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            {/* firstname */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="first_name"
                >
                  First Name
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <FaUserAlt className="absolute top-[50%] -translate-y-1/2 left-3 text-lg" />
                <input
                  type="text"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            {/* lastname */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="last_name"
                >
                  Last Name
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <FaUserAlt className="absolute top-[50%] -translate-y-1/2 left-3 text-lg" />
                <input
                  type="text"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            {/* phone */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="phone"
                >
                  Phone
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <div className="absolute top-[50%] -translate-y-1/2 left-3 text-lg flex items-center gap-2">
                  <img
                    className="w-8 h-6 object-cover"
                    src="/images/bd_flag.png"
                    alt=""
                  />
                  <p className="border-r border-gray-500 pr-2">+880</p>
                </div>
                <input
                  type="text"
                  className="w-full py-3 px-28 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            {/* email */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="email"
                >
                  Email
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <CiMail className="absolute top-[50%] -translate-y-1/2 left-3 text-xl" />
                <input
                  type="email"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            {/* validation code */}
            <div>
              <div className="relative">
                <label
                  className="absolute -top-4 left-6 bg-white px-2 "
                  htmlFor="validation"
                >
                  Validation
                  <p className="inline text-red-500 text-lg">*</p>
                </label>
                <MdSecurity className="absolute top-[50%] -translate-y-1/2 left-3 text-xl" />
                <p className="absolute top-[50%] -translate-y-1/2 right-3 text-2xl font-bold tracking-widest">
                  4219
                </p>
                <input
                  type="number"
                  className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                />
              </div>
            </div>

            {/* agree checkbox */}
            <div className="flex items-center gap-4 px-3 -mt-3">
              <input type="checkbox" name="" id="" />
              <p>
                I agree and understand the{" "}
                <p className="inline text-blue-500 underline">
                  Terms & Conditions
                </p>
              </p>
            </div>

            {/* signup button */}
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/log-in")}
                className="bg-yellow-500 px-8 py-3 rounded-md font-bold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
