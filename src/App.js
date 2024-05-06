import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import QrReader from "react-qr-scanner";
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

  //  const constraints = {
  //    audio:false,
  //    facingMode: "environment", 
  //  };
  return (
    <div style={{ width: "100%",display:"flex",flexDirection:"column",alignItems:"center",columnGap:"20px" }}>
      <h1 style={{ textAlign: "center" }}>Scan and Pay</h1>
      <QrReader style={{textAlign:"center"}}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        facingMode={'environment'}
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
      <div style={{marginTop:"20px"}}>
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