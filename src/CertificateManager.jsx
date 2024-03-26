// import { useState } from "react";

// const CertificateManager = ({ onGenerateCertificates }) => {
//   const [certificateCount, setCertificateCount] = useState(1);
//   const [certificates, setCertificates] = useState([{ id: 1, name: "Certificate 1" }]);

//   const handleCountChange = (event) => {
//     const count = parseInt(event.target.value);
//     setCertificateCount(count);
//   };

//   const handleChangeName = (id, newName) => {
//     setCertificates((prevCertificates) =>
//       prevCertificates.map((certificate) =>
//         certificate.id === id ? { ...certificate, name: newName } : certificate
//       )
//     );
//   };

//   const handleGenerateCertificates = () => {
//     const generatedCertificates = [];
//     for (let i = 0; i < certificateCount; i++) {
//       generatedCertificates.push({
//         id: i + 1,
//         name: `Certificate ${i + 1}`,
//       });
//     }
//     setCertificates(generatedCertificates);
//   };

//   const handlePrintCertificate = (id) => {
//     // Logic to print the certificate with the given id
//     const certificateToPrint = certificates.find((certificate) => certificate.id === id);
//     console.log("Printing certificate:", certificateToPrint);
//   };

//   const handleDownloadCertificate = (id) => {
//     // Logic to download the certificate with the given id
//     const certificateToDownload = certificates.find((certificate) => certificate.id === id);
//     console.log("Downloading certificate:", certificateToDownload);
//   };

//   return (
//     <div>
//       <label htmlFor="certificateCount">Number of Certificates:</label>
//       <input
//         type="number"
//         id="certificateCount"
//         value={certificateCount}
//         onChange={handleCountChange}
//         min="1"
//       />
//       <button onClick={handleGenerateCertificates}>Generate Certificates</button>

//       {certificates.map((certificate) => (
//         <div key={certificate.id}>
//           <input
//             type="text"
//             value={certificate.name}
//             onChange={(e) => handleChangeName(certificate.id, e.target.value)}
//           />
//           <button onClick={() => handlePrintCertificate(certificate.id)}>Print</button>
//           <button onClick={() => handleDownloadCertificate(certificate.id)}>Download</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CertificateManager;



// CertificateManager.jsx
import  { useState } from "react";

const CertificateManager = ({ onGenerateCertificates }) => {
  const [certificateCount, setCertificateCount] = useState(1);
  const [certificateNames, setCertificateNames] = useState([""]);

  const handleCountChange = (event) => {
    const count = parseInt(event.target.value);
    setCertificateCount(count);
    setCertificateNames(Array(count).fill(""));
  };

  const handleChangeName = (index, newName) => {
    setCertificateNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[index] = newName;
      return updatedNames;
    });
  };

  const handleGenerateCertificates = () => {
    const certificates = certificateNames.map((name, index) => ({
      id: index + 1,
      name: name || `Certificate ${index + 1}`,
    }));
    onGenerateCertificates(certificates);
  };

  return (
    <div>
      <label htmlFor="certificateCount">Number of Certificates:</label>
      <input
        type="number"
        id="certificateCount"
        value={certificateCount}
        onChange={handleCountChange}
        min="1"
      />

      {certificateNames.map((name, index) => (
        <div key={index}>
          <input
            type="text"
            value={name}
            onChange={(e) => handleChangeName(index, e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleGenerateCertificates}>Generate Certificates</button>
    </div>
  );
};

export default CertificateManager;
