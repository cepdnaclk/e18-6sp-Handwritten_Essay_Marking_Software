import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Typography } from "@mui/material";
import FileUploader from "../../components/FileUploader/FileUploader";
import { FileUpload } from "@mui/icons-material";
import "./userHome.css"; 
import Marks from "../marks/marks";

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
        <Typography>
        <div className="modal">
          <FileUpload/> Upload your file
        </div>
        </Typography>
        <FileUploader />
        <br></br>
        {/* {marks && <div>Marks: {marks}</div>} */}
        <Marks/>
      </div>
      <Footer />
    </div>
  );
};

export default UserHome;

