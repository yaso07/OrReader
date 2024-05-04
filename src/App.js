import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {QrReader} from "react-qr-reader";
export const QrCodeReader = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async(data) => {
    if (data) {
      console.log("yes")
       const data = await axios.patch(
                 `http://localhost:3200/api/seller/currentUser/6634686a9ffcbd2f03c970d8`,
                 {payment:true}
               );
      setQrCodeData(data); 
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError(err);
  };

   const constraints = {
     audio:false,
     facingMode: "environment", // Set to "environment" for back camera
   };
  return (
    <div>
      <h1 className="text-center">Scan</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        constraints={constraints}
        style={{ width: "100%" }}
      />
      {error && <p>Error: {error.message}</p>}
      {qrCodeData && (
        <div>
          <p>Text: {qrCodeData.text}</p>
          <p>Format: {qrCodeData.format}</p>
          {/* Render other desired properties */}
        </div>
      )}
    </div>
  );
};

 
const App = () => {
  return (
    <>
    
      <QrCodeReader/>
     
    </>
  );
}


export default App