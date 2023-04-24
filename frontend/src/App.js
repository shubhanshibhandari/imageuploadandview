import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

import ImageComponent from "./components/viewFIles";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}>
        
        <h4>upload Menu</h4>
      </div>

      {/* <UploadFiles /> */}
      <ImageComponent fileName="menu"/>
    </div>
  );
}

export default App;