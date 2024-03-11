import React from "react";
import Logo from "../public/logo.svg";
import Graduation from "../public/graduation.svg";
import { IoWarningOutline } from "react-icons/io5";

const Talent = () => {
  return (
    <div>
      <div className="">
        <div className="ml-20 mt-[35px]">
          <img src={Logo} alt="" className="w-[330px] h-[230px]" />
        </div>

        <div className="ml-[65rem] mt-[-12rem]">
          <img src={Graduation} alt="" className="w-52 h-60" />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center  ">
        <textarea
          rows="1"
          className="font-aliyana w-[1400px] border-0 capitalize p-24 focus:ring-0 text-center  font-normal tracking-wide leading-3 text-[130px]"
          defaultValue="Emil Ashrafli"
        ></textarea>

        <div className="mt-6 ml-[-50px]">
          <input
            rows="1"
            className=" w-[800px] border-0  focus:ring-0 text-center font-tinos uppercase text-2xl  text-transparent bg-gradient-to-r 
            from-[#fecf6b] to-[#af7525] bg-clip-text tracking-wider
            "
            defaultValue="Official Transcript & Talent Report Enclosed"
          ></input>
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-20 mt-[100px]">
          <textarea
            rows="1"
            className=" w-[300px] h-[60px] border-0 focus:ring-0  leading-5 text-center font-semibold text-base"
            defaultValue="2A Ashig Ali str.,Baku/Azerbaijan 
          info@qss.az | +994 51 341 43 40"
          ></textarea>
        </div>

        <div className="ml-[650px] mt-[100px] flex  ">
          <IoWarningOutline size={30} className="text-[#fecf6b]" />

          {/* efc060 af7525 */}

          <div className="w-[200px] h-[30px] uppercase font-semibold text-base ml-2 text-transparent bg-gradient-to-r 
            from-[#fecf6b] to-[#af7525] bg-clip-text ">
            Do not bend
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
