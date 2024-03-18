import Logo from "../public/logo.svg";
import Graduation from "../public/graduation.svg";
import { IoWarningOutline } from "react-icons/io5";
import  { useState } from "react";

const Talent = () => {
  const [text1, setText1] = useState(`Fidan Mammadoffa`);

  const [text2, setText2] = useState(
    `Official Transcript & Talent Report Enclosed`
  );

  const [text3, setText3] = useState(
    `2A Ashig Ali str., Baku/Azerbaijan\ninfo@qss.az | +994 51 341 43 40`
  );

  const handleChange1 = (event) => {
    setText1(event.target.value);
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
  };

  const handleChange3 = (event) => {
    setText3(event.target.value);
  };

  return (
    <div className="container m-auto text-center">
      <div>
        <div className="ml-20 mt-[35px]">
          <img src={Logo} alt="" className="w-[330px] h-[230px]" />
        </div>

        <div className="ml-[65rem] mt-[-12rem]">
          <img src={Graduation} alt="" className="w-52 h-60" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <textarea
          rows="1"
          className="font-aliyana w-full  text-9xl text-center h-44 pt-8 border-none"
          value={text1}
          onChange={handleChange1}
        />

        <div className="mt-6 ml-[-50px]">
          <textarea
            rows="1"
            className="w-[800px] border-none outline-none focus:ring-0 text-center font-tinos uppercase text-2xl  text-transparent bg-gradient-to-r 
            from-[#fecf6b] to-[#af7525] bg-clip-text tracking-wider"
            value={text2}
            onChange={handleChange2}
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="ml-12 mt-[100px] flex-1">
          <textarea
            rows="2"
            className="w-[350px] p-5 border-none outline-none focus:ring-0 leading-6 text-center font-semibold text-base"
            value={text3}
            onChange={handleChange3}
          />
        </div>

        <div className="ml-[600px] mt-[100px] flex items-center">
          <div className="mr-2">
            <IoWarningOutline size={30} className="text-[#fecf6b]" />
          </div>
          <div
            // className=" mr-24 uppercase font-semibold bg-clip-text   text-base text-transparent bg-gradient-to-r from-[#fecf6b] to-[#af7525]"
          className="uppercase pr-24 text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#fecf6b] to-[#af7525]"
          >
            Do not bend
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;



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

//   const [title,setTitle]= useState('')
//   const [content,setContent]= useState('')
//   const [adress,setAdress]= useState('')

//   return (
//     <div className="container m-auto text-center">
//       <div>
//         <div className="ml-20 mt-[35px]">
//           <img src={Logo} alt="" className="w-[330px] h-[230px]" />
//         </div>

//         <div className="ml-[65rem] mt-[-12rem]">
//           <img src={Graduation} alt="" className="w-52 h-60" />
//         </div>
//       </div>

//       <div className="flex flex-col justify-center items-center">
//         <textarea
//           rows="1"
//           className="font-aliyana w-[1400px] border-0 capitalize p-24 focus:ring-0 text-center font-normal tracking-wide leading-3 text-[130px]"
//           value={text1}
//           onChange={(e)=>setTitle(e.target.value)}
//         ></textarea>

//         <div className="mt-6 ml-[-50px]">
//           <textarea
//             rows="1"
//             className="w-[800px] border-none outline-none focus:ring-0 text-center font-tinos uppercase text-2xl  text-transparent bg-gradient-to-r 
//             from-[#fecf6b] to-[#af7525] bg-clip-text tracking-wider"
//             value={text2}
//             onChange={(e)=>setContent(e.target.value)}
//           ></textarea>
//         </div>
//       </div>

//       <div className="flex items-center">
//         <div className="ml-12 mt-[100px] flex-1">
//           <textarea
//             rows="2"
//             className="w-[350px] p-5 border-none outline-none focus:ring-0 leading-6 text-center font-semibold text-base"
//             value={text3}
//             onChange={(e)=>setAdress(e.target.value)}
//           ></textarea>
//         </div>

//         <div className="ml-[600px] mt-[100px] flex items-center">
//           <div className="mr-2">
//             <IoWarningOutline size={30} className="text-[#fecf6b]" />
//           </div>
//           <div
//             className=" mr-24 uppercase font-semibold text-base  text-transparent bg-gradient-to-r 
//             from-[#fecf6b] to-[#af7525] bg-clip-text"
//           >
//             Do not bend
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Talent;
