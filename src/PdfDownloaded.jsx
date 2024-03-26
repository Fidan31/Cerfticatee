// import { useRef } from "react";

// import { useReactToPrint } from "react-to-print";
// import Talent from "./Talent";

// export default function PdfDownloaded() {
//   const certificateRef = useRef();

//   const downloadPdf = useReactToPrint({
//     content: () => certificateRef.current,
//   });

//   return (
//     <div className="">
//       <div ref={certificateRef}>
//         <Talent/>
//       </div>
//       {/* this is a download button */}
//       <div className="self-end w-full px-10 my-4">
//         <button onClick={downloadPdf} className="w-full my-3">
//           <a
//             href="#_"
//             className=" relative w-96 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
//           >
//             <span className="absolute top-0  left-0 w-96 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
//             <span className="absolute bottom-0 right-0 w-96 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
//             <span className="absolute top-0  left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//             <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
//             <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
//             <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease w-96">
//               Download
//             </span>
//           </a>
//         </button>
//       </div>
//     </div>
//   );
// }



// PdfDownloaded.jsx
import { useRef,useState} from "react";
import { useReactToPrint } from "react-to-print";
import Talent from "./Talent";
import CertificateManager from "./CertificateManager";


export default function PdfDownloaded() {

  const certificateRef = useRef();
  const [generatedCertificates, setGeneratedCertificates] = useState([]);

  const downloadPdf = useReactToPrint({
    content: () => certificateRef.current,
  });

  const handleGenerateCertificates = (certificates) => {
    setGeneratedCertificates(certificates);
  };

  return (
    <div className="">
      <CertificateManager onGenerateCertificates={handleGenerateCertificates} />
      <div ref={certificateRef}>
        {/* You can map through generated certificates and render Talent component for each certificate */}
        {generatedCertificates.map((certificate) => (
          <Talent
            key={certificate.id}
            fullName={certificate.name} // Assuming name as full name
            transcriptInfo="Official Transcript & Talent Report Enclosed"
            contactInfo="2A Ashig Ali str., Baku/Azerbaijan\ninfo@qss.az | +994 51 341 43 40"
          />
        ))}
      </div>
      {/* this is a download button */}
      <div className="self-end w-full px-10 my-4">
        <button onClick={downloadPdf} className="w-full my-3">
          <a
            href="#_"
            className=" relative w-96 px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0  left-0 w-96 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-96 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0  left-0 w-full h-0 transition-all duration-300 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 group-hover:text-white ease w-96">
              Download
            </span>
          </a>
        </button>
      </div>
    </div>
  );
}
