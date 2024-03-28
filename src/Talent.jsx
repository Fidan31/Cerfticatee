// import Logo from "../public/logo.svg";
// import Graduation from "../public/graduation.svg";
// import { IoWarningOutline } from "react-icons/io5";
// import  { useState } from "react";

// const Talent = () => {
//   const [text1, setText1] = useState(`Fidan Mammadova`);

//   const [text2, setText2] = useState(
//     `Official Transcript & Talent Report Enclosed`
//   );

//   const [text3, setText3] = useState(
//     `2A Ashig Ali str., Baku/Azerbaijan\ninfo@qss.az | +994 51 341 43 40`
//   );

//   const handleChange1 = (event) => {
//     setText1(event.target.value);
//   };

//   const handleChange2 = (event) => {
//     setText2(event.target.value);
//   };

//   const handleChange3 = (event) => {
//     setText3(event.target.value);
//   };

//   return (
//     <div className="container m-auto  text-center">
//       <div className="flex items-center justify-between">
//         <div className="ml-20 mt-[35px]">
//           <img src={Logo} alt="" className="w-[330px] h-[230px]" />
//         </div>

//         <div className="">
//           <img src={Graduation} alt="" className="w-52 h-60" />
//         </div>
//       </div>

//       <div className="flex flex-col justify-center items-center">
//         <textarea
//           rows="1"
//           className="font-aliyana w-full  text-8xl text-center h-44 pt-8 border-none"
//           value={text1}
//           onChange={handleChange1}
//         />

//         <div className="mt-6 ml-[-50px]">
//           <textarea
//             rows="1"
//             className="w-[800px] border-none outline-none focus:ring-0 text-center font-tinos uppercase text-2xl  text-transparent bg-gradient-to-r
//             from-[#fecf6b] to-[#af7525] bg-clip-text tracking-wider"
//             value={text2}
//             onChange={handleChange2}
//           />
//         </div>
//       </div>

//       <div className="flex items-center justify-between pr-16 mt-16 ">
//         <div className="">
//           <textarea
//             rows="2"
//             className="w-96 border-none outline-none focus:ring-0  text-center font-semibold text-base"
//             value={text3}
//             onChange={handleChange3}
//           />
//         </div>

//         <div className="  flex items-center  ">

//           <p className="uppercase text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fecf6b] to-[#af7525] flex items-center justify-center gap-2" >
//           <IoWarningOutline size={30} className="text-[#fecf6b]" /> Do not bend
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


import Logo from "../public/logo.svg";
import Graduation from "../public/graduation.svg";
import { IoWarningOutline } from "react-icons/io5";

const Talent = ({ fullName, transcriptInfo, contactInfo }) => {
  return (
    <div className="container m-auto text-center print-container">
      <div className="flex items-center justify-between">
        <div className="ml-10 mt-[30px]">
          <img src={Logo} alt="" className="w-[330px] h-[230px]" style={{ marginTop: "-40px" }}/>
        </div>

        <div className="mt-[80px] ml-[-20px]">
          <img src={Graduation} alt="" className="w-52 h-60" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[-50px]">
        <textarea
          rows="1"
          className="font-aliyana py-24 w-full text-[120px] text-center h-auto  border-none outline-none focus:ring-0"
          value={fullName}
       
        />

        <div className="mt-6 ml-[-50px]">
          <textarea
            rows="1"
            className="w-[800px]  border-none outline-none focus:ring-0 text-center font-tinos uppercase text-xl  tracking-wider  text-transparent bg-gradient-to-r
            from-[#fecf6b] to-[#af7525] bg-clip-text"
            value={transcriptInfo}
            
          />
        </div>
      </div>
      
      <div className="flex items-center mt-20">
        <div className="mt-10 ml-[20px]">
          <textarea
            rows="2"
            className="w-96 border-none outline-none focus:ring-0  text-center font-semibold text-base"
            value={contactInfo}
            readOnly
          />
        
      </div>

      <div className=" mt-10  ml-[380px]">
        <p className="uppercase text-sm font-bold  flex items-center justify-center gap-2 bg-gradient-to-r from-[#fecf6b] to-[#af7525] bg-clip-text text-transparent ">
          <IoWarningOutline size={30} className="text-[#fecf6b]" /> Do not bend
        </p>
      </div>
    
      </div>
    </div>
  );
};

export default Talent;
