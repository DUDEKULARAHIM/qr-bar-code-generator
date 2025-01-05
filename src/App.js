// import React from 'react';
// import SimpleToggleButton from './SimpleToggleButton';
// import EnhancedToggleButton from './EnhancedToggleButton';

// const App = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Toggle Button Examples</h1>
      
//       <h2>Simple Toggle Button</h2>
//       <SimpleToggleButton />
      
//       <h2>Enhanced Toggle Button</h2>
//       <p>Enabled (Initial State: ON)</p>
//       <EnhancedToggleButton initialState={true} />
      
//       <p>Disabled (Initial State: OFF)</p>
//       <EnhancedToggleButton initialState={true} disabled={true} />
    
//     </div>
//   );
// };

// export default App;









// import React, { useState } from "react";
// import QRCode from "react-qr-code";

// function App() {
//   const [links, setLinks] = useState([]);
//   const [newLink, setNewLink] = useState("");

//   const addLink = () => {
//     if (newLink.trim()) {
//       setLinks([...links, newLink.trim()]);
//       setNewLink(""); // Clear the input field
//     }
//   };

//   const removeLink = (index) => {
//     const updatedLinks = links.filter((_, i) => i !== index);
//     setLinks(updatedLinks);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Dynamic QR Code Generator</h1>

//       {/* Input for adding new links */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={newLink}
//           onChange={(e) => setNewLink(e.target.value)}
//           placeholder="Enter a link"
//           style={{
//             padding: "10px",
//             width: "300px",
//             marginRight: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//           }}
//         />
//         <button
//           onClick={addLink}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#28a745",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Add Link
//         </button>
//       </div>

//       {/* Display list of links with QR codes */}
//       {links.length > 0 && (
//         <div>
//           <h2>Generated QR Codes</h2>
//           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//             {links.map((link, index) => (
//               <div
//                 key={index}
//                 style={{
//                   margin: "20px",
//                   padding: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "10px",
//                   textAlign: "center",
//                 }}
//               >
//                 <QRCode value={link} size={150} />
//                 <p>{link}</p>
//                 <button
//                   onClick={() => removeLink(index)}
//                   style={{
//                     marginTop: "10px",
//                     padding: "5px 10px",
//                     backgroundColor: "#dc3545",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;











// App.jsx
// import React, { useState } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

// function App() {
//   const [inputValue, setInputValue] = useState("https://example.com");

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>QR Code & Barcode Generator</h1>

//       {/* Input Field for Generating QR and Barcode */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Enter a link or text"
//           style={{
//             padding: "10px",
//             width: "300px",
//             marginRight: "10px",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//           }}
//         />
//       </div>

//       {/* QR Code Section */}
//       <div style={{ marginBottom: "40px" }}>
//         <h2>QR Code</h2>
//         <QRCode value={inputValue} size={150} />
//       </div>

//       {/* Barcode Section */}
//       <div>
//         <h2>Barcode</h2>
//         <Barcode value={inputValue} />
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useState } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [generatedLink, setGeneratedLink] = useState("");
//   const [showScanner, setShowScanner] = useState("");

//   const handleGenerate = () => {
//     if (inputValue.trim() === "") {
//       alert("Please enter a link or text.");
//     } else {
//       setGeneratedLink(inputValue.trim());
//       setShowScanner(""); // Reset scanner display
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>QR Code & Barcode Generator</h1>

//       {/* Input and Generate Button */}
//       {!generatedLink && (
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter a link or text"
//             style={{
//               padding: "10px",
//               width: "300px",
//               marginRight: "10px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//           <button
//             onClick={handleGenerate}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>
//       )}

//       {/* Show Options After Generating the Link */}
//       {generatedLink && !showScanner && (
//         <div>
//           <h3>Choose an Option</h3>
//           <button
//             onClick={() => setShowScanner("qr")}
//             style={{
//               padding: "10px 20px",
//               marginRight: "10px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Show QR Code
//           </button>
//           <button
//             onClick={() => setShowScanner("barcode")}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#ffc107",
//               color: "black",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Show Barcode
//           </button>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {showScanner === "qr" && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>QR Code</h3>
//           <QRCode value={generatedLink} size={150} />
//           <p>{generatedLink}</p>
//           <button
//             onClick={() => setShowScanner("")}
//             style={{
//               padding: "5px 10px",
//               marginTop: "10px",
//               backgroundColor: "#dc3545",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Back
//           </button>
//         </div>
//       )}

//       {/* Display Barcode */}
//       {showScanner === "barcode" && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Barcode</h3>
//           <Barcode value={generatedLink} />
//           <p>{generatedLink}</p>
//           <button
//             onClick={() => setShowScanner("")}
//             style={{
//               padding: "5px 10px",
//               marginTop: "10px",
//               backgroundColor: "#dc3545",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Back
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;














// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

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
//         </head>
//         <body>${content}</body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.print();
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>QR Code & Barcode Generator</h1>

//       {/* Input and Generate Button */}
//       {!generatedLink && (
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter a link or text"
//             style={{
//               padding: "10px",
//               width: "300px",
//               marginRight: "10px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//           <button
//             onClick={handleGenerate}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>
//       )}

//       {/* Show Options After Generating the Link */}
//       {generatedLink && !showScanner && (
//         <div>
//           <h3>Choose an Option</h3>
//           <button
//             onClick={() => setShowScanner("qr")}
//             style={{
//               padding: "10px 20px",
//               marginRight: "10px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Show QR Code
//           </button>
//           <button
//             onClick={() => setShowScanner("barcode")}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: "#ffc107",
//               color: "black",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Show Barcode
//           </button>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {showScanner === "qr" && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>QR Code</h3>
//           <div ref={qrCodeRef}>
//             <QRCode value={generatedLink} size={150} />
//           </div>
//           <p>{generatedLink}</p>
//           <div style={{ marginTop: "10px" }}>
//             <button
//               onClick={() => handleDownload(qrCodeRef, "qr-code")}
//               style={{
//                 padding: "5px 10px",
//                 marginRight: "10px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(qrCodeRef)}
//               style={{
//                 padding: "5px 10px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Print
//             </button>
//           </div>
//           <button
//             onClick={() => setShowScanner("")}
//             style={{
//               padding: "5px 10px",
//               marginTop: "10px",
//               backgroundColor: "#dc3545",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Back
//           </button>
//         </div>
//       )}

//       {/* Display Barcode */}
//       {showScanner === "barcode" && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Barcode</h3>
//           <div ref={barcodeRef}>
//             <Barcode value={generatedLink} />
//           </div>
//           <p>{generatedLink}</p>
//           <div style={{ marginTop: "10px" }}>
//             <button
//               onClick={() => handleDownload(barcodeRef, "barcode")}
//               style={{
//                 padding: "5px 10px",
//                 marginRight: "10px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(barcodeRef)}
//               style={{
//                 padding: "5px 10px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Print
//             </button>
//           </div>
//           <button
//             onClick={() => setShowScanner("")}
//             style={{
//               padding: "5px 10px",
//               marginTop: "10px",
//               backgroundColor: "#dc3545",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Back
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;














// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

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
//     <div style={{ textAlign: "center", padding: "20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//       <h1 style={{ fontSize: "2.5rem", color: "#343a40", marginBottom: "20px" }}>QR Code & Barcode Generator</h1>

//       {/* Input and Generate Button */}
//       {!generatedLink && (
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter a link or text"
//             style={{
//               padding: "12px",
//               width: "350px",
//               marginRight: "10px",
//               border: "2px solid #ccc",
//               borderRadius: "8px",
//               fontSize: "1rem",
//             }}
//           />
//           <button
//             onClick={handleGenerate}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>
//       )}

//       {/* Show Options After Generating the Link */}
//       {generatedLink && !showScanner && (
//         <div>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Choose an Option</h3>
//           <button
//             onClick={() => setShowScanner("qr")}
//             style={{
//               padding: "12px 20px",
//               marginRight: "10px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Show QR Code
//           </button>
//           <button
//             onClick={() => setShowScanner("barcode")}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#ffc107",
//               color: "black",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Show Barcode
//           </button>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {showScanner === "qr" && (
//         <div style={{ marginTop: "30px" }}>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>QR Code</h3>
//           <div ref={qrCodeRef} style={{ marginBottom: "20px" }}>
//             <QRCode value={generatedLink} size={200} />
//           </div>
//           <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div>
//             <button
//               onClick={() => handleDownload(qrCodeRef, "qr-code")}
//               style={{
//                 padding: "10px 15px",
//                 marginRight: "15px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(qrCodeRef)}
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Print
//             </button>
//           </div>

//           <button
//             onClick={() => setShowScanner("")}
//             style={{
//               padding: "8px 15px",
//               marginTop: "20px",
//               backgroundColor: "#dc3545",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Back
//           </button>
//         </div>
//       )}

//       {/* Display Barcode */}
//       {showScanner === "barcode" && (
//         <div style={{ marginTop: "30px" }}>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Barcode</h3>
//           <div ref={barcodeRef} style={{ marginBottom: "20px" }}>
//             <Barcode value={generatedLink} />
//           </div>
//           <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div>
//             <button
//               onClick={() => handleDownload(barcodeRef, "barcode")}
//               style={{
//                 padding: "10px 15px",
//                 marginRight: "15px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(barcodeRef)}
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Print
//             </button>
//           </div>

//           <button
//             onClick={() => setShowScanner("")}
//             style={{
//               padding: "8px 15px",
//               marginTop: "20px",
//               backgroundColor: "#dc3545",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Back
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;












// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

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
//     <div style={{ textAlign: "center", padding: "20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//       <h1 style={{ fontSize: "2.5rem", color: "#343a40", marginBottom: "20px" }}>QR Code & Barcode Generator</h1>

//       {/* Input and Generate Button */}
//       {!generatedLink && (
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter a link or text"
//             style={{
//               padding: "12px",
//               width: "350px",
//               marginRight: "10px",
//               border: "2px solid #ccc",
//               borderRadius: "8px",
//               fontSize: "1rem",
//             }}
//           />
//           <button
//             onClick={handleGenerate}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>
//       )}

//       {/* Show Options After Generating the Link */}
//       {generatedLink && !showScanner && (
//         <div>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Choose an Option</h3>
//           <button
//             onClick={() => setShowScanner("qr")}
//             style={{
//               padding: "12px 20px",
//               marginRight: "10px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Show QR Code
//           </button>
//           <button
//             onClick={() => setShowScanner("barcode")}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#ffc107",
//               color: "black",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Show Barcode
//           </button>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {showScanner === "qr" && (
//         <div style={{ marginTop: "30px" }}>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>QR Code</h3>
//           <div ref={qrCodeRef} style={{ marginBottom: "20px" }}>
//             <QRCode value={generatedLink} size={200} />
//           </div>
//           <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div>
//             <button
//               onClick={() => handleDownload(qrCodeRef, "qr-code")}
//               style={{
//                 padding: "10px 15px",
//                 marginRight: "15px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(qrCodeRef)}
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Print
//             </button>
//           </div>

//           {/* Back Button */}
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={() => setShowScanner("")}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Back to Options
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Display Barcode */}
//       {showScanner === "barcode" && (
//         <div style={{ marginTop: "30px" }}>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Barcode</h3>
//           <div ref={barcodeRef} style={{ marginBottom: "20px" }}>
//             <Barcode value={generatedLink} />
//           </div>
//           <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div>
//             <button
//               onClick={() => handleDownload(barcodeRef, "barcode")}
//               style={{
//                 padding: "10px 15px",
//                 marginRight: "15px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(barcodeRef)}
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Print
//             </button>
//           </div>

//           {/* Back Button */}
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={() => setShowScanner("")}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Back to Options
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;










// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

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
//     <div style={{ textAlign: "center", padding: "20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//       <h1 style={{ fontSize: "2.5rem", color: "#343a40", marginBottom: "20px" }}>QR Code & Barcode Generator</h1>

//       {/* Input and Generate Button */}
//       {!generatedLink && (
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Enter a link or text"
//             style={{
//               padding: "12px",
//               width: "100%",
//               maxWidth: "350px",
//               marginRight: "10px",
//               border: "2px solid #ccc",
//               borderRadius: "8px",
//               fontSize: "1rem",
//             }}
//           />
//           <button
//             onClick={handleGenerate}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Generate Link
//           </button>
//         </div>
//       )}

//       {/* Show Options After Generating the Link */}
//       {generatedLink && !showScanner && (
//         <div>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Choose an Option</h3>
//           <button
//             onClick={() => setShowScanner("qr")}
//             style={{
//               padding: "12px 20px",
//               marginRight: "10px",
//               backgroundColor: "#28a745",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Show QR Code
//           </button>
//           <button
//             onClick={() => setShowScanner("barcode")}
//             style={{
//               padding: "12px 20px",
//               backgroundColor: "#ffc107",
//               color: "black",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             Show Barcode
//           </button>
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={() => setGeneratedLink("")}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Back to Enter Link
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Display QR Code */}
//       {showScanner === "qr" && (
//         <div style={{ marginTop: "30px" }}>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>QR Code</h3>
//           <div ref={qrCodeRef} style={{ marginBottom: "20px" }}>
//             <QRCode value={generatedLink} size={200} />
//           </div>
//           <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div>
//             <button
//               onClick={() => handleDownload(qrCodeRef, "qr-code")}
//               style={{
//                 padding: "10px 15px",
//                 marginRight: "15px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(qrCodeRef)}
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Print
//             </button>
//           </div>

//           {/* Back Button */}
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={() => setShowScanner("")}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Back to Options
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Display Barcode */}
//       {showScanner === "barcode" && (
//         <div style={{ marginTop: "30px" }}>
//           <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Barcode</h3>
//           <div ref={barcodeRef} style={{ marginBottom: "20px" }}>
//             <Barcode value={generatedLink} />
//           </div>
//           <p style={{ fontSize: "1rem", marginBottom: "20px" }}>{generatedLink}</p>

//           {/* Download and Print Buttons */}
//           <div>
//             <button
//               onClick={() => handleDownload(barcodeRef, "barcode")}
//               style={{
//                 padding: "10px 15px",
//                 marginRight: "15px",
//                 backgroundColor: "#17a2b8",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Download
//             </button>
//             <button
//               onClick={() => handlePrint(barcodeRef)}
//               style={{
//                 padding: "10px 15px",
//                 backgroundColor: "#6c757d",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Print
//             </button>
//           </div>

//           {/* Back Button */}
//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={() => setShowScanner("")}
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#dc3545",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Back to Options
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;







// import React, { useState, useRef } from "react";
// import QRCode from "react-qr-code";
// import Barcode from "react-barcode";

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
//           </div>

//           {/* Back Button */}
//           <button onClick={() => setShowScanner("")} className="back-button">
//             Back to Options
//           </button>
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
//           </div>

//           {/* Back Button */}
//           <button onClick={() => setShowScanner("")} className="back-button">
//             Back to Options
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;








// App.js
import React from "react";
import CodeScanner from "./code-scanner"; // Import the CodeScanner component

const App = () => {
  return (
    <div>
      <CodeScanner />
    </div>
  );
};

export default App;


