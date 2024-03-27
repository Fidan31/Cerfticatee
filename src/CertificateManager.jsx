// import React, { useState } from "react";

// const CertificateManager = ({ onGenerateCertificates }) => {
//   const [certificateCount, setCertificateCount] = useState(1);
//   const [fullName, setFullName] = useState("Fidan Mammadova");
//   const [transcriptInfo, setTranscriptInfo] = useState("Official Transcript & Talent Report Enclosed");
//   const [contactInfo, setContactInfo] = useState("2A Ashig Ali str., Baku/Azerbaijan\ninfo@qss.az | +994 51 341 43 40");

//   const handleCountChange = (event) => {
//     const count = parseInt(event.target.value);
//     setCertificateCount(count);
//   };

//   const handleChangeFullName = (event) => {
//     setFullName(event.target.value);
//   };

//   const handleChangeTranscriptInfo = (event) => {
//     setTranscriptInfo(event.target.value);
//   };

//   const handleChangeContactInfo = (event) => {
//     setContactInfo(event.target.value);
//   };

//   const handleGenerateCertificates = () => {
//     const certificates = [];
//     for (let i = 0; i < certificateCount; i++) {
//       certificates.push({
//         id: i + 1,
//         name: fullName,
//         transcriptInfo,
//         contactInfo
//       });
//     }
//     onGenerateCertificates(certificates);
//   };

//   return (
//     <div>
//       <label htmlFor="certificateCount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Certificates:</label>
//       <input
//         type="number"
//         id="certificateCount"
//         value={certificateCount}
//         onChange={handleCountChange}
//         min="1"
//         className=" w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
//          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       />

//       <div>
//         <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name:</label>
//         <input
//           type="text"
//           id="fullName"
//           value={fullName}
//           onChange={handleChangeFullName}
//           className=" w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
//           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="transcriptInfo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transcript Info:</label>
//         <textarea
//           id="transcriptInfo"
//           value={transcriptInfo}
//           onChange={handleChangeTranscriptInfo}
//           className="w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
//           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="contactInfo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Info:</label>
//         <textarea
//           id="contactInfo"
//           value={contactInfo}
//           onChange={handleChangeContactInfo}
//           className=" w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
//           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>

//       <button onClick={handleGenerateCertificates} className="text-xl">Generate Certificates</button>
//     </div>
//   );
// };

// export default CertificateManager;



















import React, { useState } from "react";

const CertificateManager = ({ onGenerateCertificates }) => {
  const [certificateCount, setCertificateCount] = useState(1);
  const [namesInput, setNamesInput] = useState("");
  const [transcriptInfo, setTranscriptInfo] = useState(
    "Official Transcript & Talent Report Enclosed"
  );
  const [contactInfo, setContactInfo] = useState(
    "2A Ashig Ali str., Baku/Azerbaijan\ninfo@qss.az | +994 51 341 43 40"
  );

  const handleCountChange = (event) => {
    const count = parseInt(event.target.value);
    setCertificateCount(count);
  };

  const handleNamesInputChange = (event) => {
    setNamesInput(event.target.value);
  };
  const handleChangeTranscriptInfo = (event) => {
    setTranscriptInfo(event.target.value);
  };
  const handleChangeContactInfo = (event) => {
    setContactInfo(event.target.value);
  };

  const handleGenerateCertificates = () => {
    const namesArray = namesInput.split(",").map((name) => name.trim());
    const certificates = namesArray.map((name, index) => ({
      id: index + 1,
      name: name,
transcriptInfo,
contactInfo
    }));
    onGenerateCertificates(certificates);
  };

  return (
    <div>
      <label
        htmlFor="certificateCount"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Number of Certificates:
      </label>
      <input
        type="number"
        id="certificateCount"
        value={certificateCount}
        onChange={handleCountChange}
        min="1"
        className="w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <div>
        <label
          htmlFor="namesInput"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter Names (comma-separated):
        </label>
        <input
          type="text"
          id="namesInput"
          value={namesInput}
          onChange={handleNamesInputChange}
          className="w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="transcriptInfo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Transcript Info:
        </label>
        <textarea
          id="transcriptInfo"
          value={transcriptInfo}
          onChange={handleChangeTranscriptInfo}
          className="w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="contactInfo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contact Info:
        </label>
        <textarea
          id="contactInfo"
          value={contactInfo}
          onChange={handleChangeContactInfo}
          className=" w-[500px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button onClick={handleGenerateCertificates} className="text-xl">
        Generate Certificates
      </button>
    </div>
  );
};

export default CertificateManager;
