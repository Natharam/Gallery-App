import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import UploadForm from "./component/UploadForm";
import Title from "./component/Title";
import ImageGrid from "./component/ImageGrid";
import Modal from "./component/Modal";
import "./App.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
