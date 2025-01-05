

// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";
// import "./code-scanner.css";
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [generatedLink, setGeneratedLink] = useState("");
//   const [showScanner, setShowScanner] = useState("");
//   const qrCodeRef = useRef();
//   const barcodeRef = useRef();

//   const handleGenerate = () => {
//     if (inputValue.trim() === "") {
//       alert("Please enter a link or text.");
//     } else {
//       setGeneratedLink(inputValue.trim());
//       setShowScanner(""); // Reset scanner display
//     }
//   };

//   // Download the QR code or Barcode
//   const handleDownload = (ref, type) => {
//     const svgElement = ref.current.querySelector("svg");
//     const svgData = new XMLSerializer().serializeToString(svgElement);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     const img = new Image();
//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);

//       const a = document.createElement("a");
//       a.href = canvas.toDataURL("image/png");
//       a.download = `${type}.png`;
//       a.click();
//     };

//     img.src = "data:image/svg+xml;base64," + btoa(svgData);
//   };

//   // Print the QR code or Barcode
//   const handlePrint = (ref) => {
//     const content = ref.current.innerHTML;
//     const printWindow = window.open("", "_blank", "width=600,height=600");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Print</title>
//           <style>
//             body { font-family: Arial, sans-serif; text-align: center; }
//             .content { margin-top: 20px; }
//           </style>
//         </head>
//         <body>
//           <div class="content">${content}</div>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <div className="container">
//       <h1>QR Code & Barcode Generator</h1>

//       {/* Input and Generate Button */}
//       {!generatedLink && (
//         <div className="input-container">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter a link or text"
//             className="input-field"
//           />
//           <button onClick={handleGenerate} className="generate-button">
//             Generate Link
//           </button>
//         </div>
//       )}

//       {/* Show Options After Generating the Link */}
//       {generatedLink && !showScanner && (
//         <div className="options-container">
//           <h3>Choose an Option</h3>
//           <button onClick={() => setShowScanner("qr")} className="show-button">
//             Show QR Code
//           </button>
//           <button onClick={() => setShowScanner("barcode")} className="show-button">
//             Show Barcode
//           </button>
//           <button onClick={() => setGeneratedLink("")} className="back-button">
//             Back to Enter Link
//           </button>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {showScanner === "qr" && (
//         <div className="qr-barcode-container">
//           <h3>QR Code</h3>
//           <div ref={qrCodeRef} className="code-container">
//             <QRCode value={generatedLink} size={200} />
//           </div>
//           <p>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div className="action-buttons">
//             <button onClick={() => handleDownload(qrCodeRef, "qr-code")} className="action-button">
//               Download
//             </button>
//             <button onClick={() => handlePrint(qrCodeRef)} className="action-button">
//               Print
//             </button>
//             <button onClick={() => setShowScanner("")} className="back-button">
//             Back to Options
//           </button>
//           </div>

//           {/* Back Button */}
          
//         </div>
//       )}

//       {/* Display Barcode */}
//       {showScanner === "barcode" && (
//         <div className="qr-barcode-container">
//           <h3>Barcode</h3>
//           <div ref={barcodeRef} className="code-container">
//             <Barcode value={generatedLink} />
//           </div>
//           <p>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div className="action-buttons">
//             <button onClick={() => handleDownload(barcodeRef, "barcode")} className="action-button">
//               Download
//             </button>
//             <button onClick={() => handlePrint(barcodeRef)} className="action-button">
//               Print
//             </button>
//             <button onClick={() => setShowScanner("")} className="back-button">
//             Back to Options
//           </button>
//           </div>

//           {/* Back Button */}
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;















import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";
import "./code-scanner.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

function App() {
  const [inputValue, setInputValue] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [showScanner, setShowScanner] = useState("");
  const qrCodeRef = useRef();
  const barcodeRef = useRef();

  const handleGenerate = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a link or text.");
    } else {
      setGeneratedLink(inputValue.trim());
      setShowScanner(""); // Reset scanner display
    }
  };

  const handleDownload = (ref, type) => {
    const svgElement = ref.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = `${type}.png`;
      a.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  const handlePrint = (ref) => {
    const content = ref.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=600,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; }
            .content { margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="content">${content}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h1>QR & Barcode Scanner && Generator</h1>
      </div>

      {/* Input and Generate Button */}
      {!generatedLink && (
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a link or text"
            className="input-field"
          />
          <button onClick={handleGenerate} className="generate-button">
            Generate QR/BAR Code
          </button>
        </div>
      )}

      {/* Show Options After Generating the Link */}
      {generatedLink && !showScanner && (
        <div className="options-container">
          <h3>Choose an Option</h3>
          <button onClick={() => setShowScanner("qr")} className="show-button">
            Show QR Code
          </button>
          <button onClick={() => setShowScanner("barcode")} className="show-button">
            Show Barcode
          </button>
          <button onClick={() => setGeneratedLink("")} className="back-button">
            Back to Enter Link
          </button>
        </div>
      )}

      {/* Display QR Code */}
      {showScanner === "qr" && (
        <div className="qr-barcode-container">
          <h3>QR Code</h3>
          <div ref={qrCodeRef} className="code-container">
            <QRCode value={generatedLink} size={200} />
          </div>
          <p>{generatedLink}</p>

          {/* Download and Print Buttons */}
          <div className="action-buttons">
            <button onClick={() => handleDownload(qrCodeRef, "qr-code")} className="action-button">
              Download
            </button>
            <button onClick={() => handlePrint(qrCodeRef)} className="action-button">
              Print
            </button>
            <button onClick={() => setShowScanner("")} className="back-button">
              Back to Options
            </button>
          </div>
        </div>
      )}

      {/* Display Barcode */}
      {showScanner === "barcode" && (
        <div className="qr-barcode-container">
          <h3>Barcode</h3>
          <div ref={barcodeRef} className="code-container">
            <Barcode value={generatedLink} />
          </div>
          <p>{generatedLink}</p>

          {/* Download and Print Buttons */}
          <div className="action-buttons">
            <button onClick={() => handleDownload(barcodeRef, "barcode")} className="action-button">
              Download
            </button>
            <button onClick={() => handlePrint(barcodeRef)} className="action-button">
              Print
            </button>
            <button onClick={() => setShowScanner("")} className="back-button">
              Back to Options
            </button>
          </div>
        </div>
      )}

      {/* Footer with Social Media Links */}
      <footer className="footer">
        <div className="social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
