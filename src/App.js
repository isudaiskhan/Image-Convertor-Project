import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import ImageUploader from "./Components/ImageUploader/ImageUploader";
import Converter from "./Components/Converter/Converter";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <>
    <Navbar />
    <div className="min-h-screen text-white flex flex-col items-center">
      <Header />
      <div className="w-full mx-auto">
        <ImageUploader setUploadedFile={setUploadedFile} />
        {uploadedFile && <Converter uploadedFile={uploadedFile} />}
      </div>
      <ToastContainer />
    </div>
    <Footer />
    </>
  );
};

export default App;
