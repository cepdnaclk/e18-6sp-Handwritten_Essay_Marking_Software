import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Typography } from "@mui/material";
import FileUploader from "../../components/FileUploader/FileUploader";
import { FileUpload } from "@mui/icons-material";

const UserHome = () => {
  const [activeSection, setActiveSection] = useState("postalCodeLookup");

  const goToSection = (section) => {
    setActiveSection(section);
  };


  return (
    <div>
      <NavBar />
      <div>
        <div style={{ marginTop: "100px", marginLeft:"20px" }}>
        <Typography><FileUpload/> Upload your file</Typography>
        <FileUploader />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default UserHome;

