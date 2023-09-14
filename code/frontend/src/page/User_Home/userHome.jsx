import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Typography } from "@mui/material";
import FileUploader from "../../components/FileUploader/FileUploader";
import { FileUpload } from "@mui/icons-material";
import "./userHome.css"; 

const UserHome = () => {
  const [activeSection, setActiveSection] = useState("postalCodeLookup");
  const [marks, setMarks] = useState(0);

  const goToSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <Typography><FileUpload/> Upload your file</Typography>
        <FileUploader />
        {marks && <div>Marks: {marks}</div>}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default UserHome;

