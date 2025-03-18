import axios from "axios";
import { FaChevronLeft, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { IoIosUnlock } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [validationCode, setValidationCode] = useState("");
  const navigate = useNavigate();

  const fetchCaptchaCode = async () => {
    await axios
      .post(`${baseUrl}/api/auth/add-captcha`, { ip: "152.59.32.17" })
      .then((res) => setCaptchaCode(res?.data?.data));
  };

  useEffect(() => {
    fetchCaptchaCode();
  }, []);

  const handleLogin = async () => {
    if (captchaCode !== validationCode) {
      toast.error("Wrong Validation Code");
      return;
    }
    const loginData = {
      userName: username,
      password,
      city: "xyz",
      country: "xyz",
      isp: "xyz",
      proxy: false,
      ip: "152.59.32.17",
      state: "xyz",
      code: validationCode,
    };
    await axios
      .post(`${baseUrl}/api/auth/sign-in`, loginData, {})
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.data?.token) {
          navigate("/");
          Cookies.set("token", res?.data?.data?.token);
          Cookies.set("user", JSON.stringify(res?.data?.data));
          toast.success(res?.data?.message);
        }
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/loginBg.webp')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[500px] mx-auto min-h-screen relative"
    >
      {/* back button */}
      <div className="p-3">
        <FaChevronLeft
          onClick={() => navigate("/")}
          className="w-10 h-10 bg-white rounded-full p-2 cursor-pointer"
        />
      </div>
      <div className="absolute bottom-0 w-full">
        {/* logo */}
        <div className="flex justify-center  p-3">
          <img className="w-[50%] " src="/images/velki-logo.webp" alt="" />
        </div>
        {/* banner */}
        <div>
          <img
            className="object-cover"
            src="/images/velki-login-signup-banner.webp"
            alt=""
          />
        </div>

        {/* form */}
        <div className="bg-white rounded-t-lg ">
          <div className="py-8">
            {/* signup title */}
            <div className="flex justify-center">
              <p className="text-3xl">Login</p>
            </div>

            {/* all fields */}
            <div className="w-[90%] mx-auto flex flex-col gap-y-8 my-5">
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
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                  />
                </div>
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
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
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
                    {captchaCode}
                  </p>
                  <input
                    onChange={(e) => setValidationCode(e.target.value)}
                    type="number"
                    className="w-full py-3 px-10 rounded-md border-2 border-black outline-none focus:border-yellow-600"
                  />
                </div>
              </div>

              {/* remember me butto */}
              <div className="px-3 flex items-center gap-3 -mt-5">
                <input type="checkbox" name="" id="" />
                <p>Remember me</p>
              </div>

              {/* signup button */}
              <div className="flex justify-center">
                <button
                  onClick={handleLogin}
                  className="bg-yellow-500 px-8 py-3 rounded-md font-bold"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
