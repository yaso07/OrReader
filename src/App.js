import React from 'react'
import axios from 'axios'
import { useState } from 'react';

import QrReader from "react-qr-scanner";
const QrCodeReader = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async(data) => {
    if (data) {
      console.log("yes")
       const data = await axios.patch(
                 `http://localhost:3200/seller/currentUser/6634686a9ffcbd2f03c970d8`,
                 {payment:true}
               );
      setQrCodeData(data); 
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError(err);
  };

  return (
    <div>
      <h1>QR Code Reader</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        facingMode={"environment"}
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