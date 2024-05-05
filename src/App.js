import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {QrReader} from "react-qr-reader";
import { toast } from "react-toastify";
const QrCodeReader = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = async(data) => {
    if (data) {
      console.log("yes")
      
      setQrCodeData(data); 
    }
  };

  const handlePayment=async()=>{
          toast.success("payment done");
       const data = await axios.patch(
                 `http://localhost:3200/api/seller/currentUser/6634686a9ffcbd2f03c970d8`,
                 {payment:true}
               );
  }
  const handleError = (err) => {
    console.error(err);
    setError(err);
  };

   const constraints = {
     audio:false,
     facingMode: "environment", // Set to "environment" for back camera
   };
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Scan and Pay</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        constraints={constraints}
        style={{ height: "20%", width: "50%" }}
      />
      {error && <p>Error: {error.message}</p>}
      {qrCodeData && (
        <div>
          <p>payment paid</p>
          <p></p>
          {/* Render other desired properties */}
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <button

          style={{
            width: "200px",
            padding: "10px",
            backgroundColor: "rgb(77, 184, 211)",
            borderRadius: "10px",
            border: "1px solid rgb(77, 184, 211)",
          }}
          onClick={handlePayment}
        >
          Pay
        </button>
      </div>
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