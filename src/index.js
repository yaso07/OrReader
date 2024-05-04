import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
 

const Myfunction=()=>{return <>
   <App></App>
</>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Myfunction/>);
