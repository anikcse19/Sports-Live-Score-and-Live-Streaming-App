import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-16 bg-blue-50">
      <div className="flex flex-col gap-1 items-center">
        <img className="w-36" src="/images/downloadImg.webp" alt="" />
        <p className="text-gray-400 text-xs">v1.11 - 2022/3/8 - 2.6MB</p>
      </div>

      <div className="mt-6 flex justify-center items-center gap-3">
        <FaTelegram className="text-4xl cursor-pointer" />
        <IoLogoWhatsapp className="text-4xl cursor-pointer" />
        <FaFacebook className="text-4xl cursor-pointer" />
      </div>

      <div className="mt-6 flex justify-center flex-wrap items-center gap-1">
        <p className="text-xs px-2 border-r border-slate-400">Privacy Policy</p>
        <p className="text-xs px-2  border-r border-slate-400">
          Terms and Conditions
        </p>
        <p className="text-xs px-2 border-r border-slate-400">
          Rules and Regulations
        </p>
        <p className="text-xs px-2 border-r border-slate-400">KYC</p>
        <p className="text-xs px-2">Responsible Gaming</p>
      </div>
    </div>
  );
};

export default Footer;
