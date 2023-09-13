import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Stack, Typography } from "@mui/material";
import stampCollection from "../../images/world-post-office-day-national-post-day-generative-ai (1) 1.png";
import ServiceCard from "./ServiceCard";
import imageOne from "../../images/a.png";
import imageTwo from "../../images/Isolation_Mode(1).png";
import imageThree from "../../images/Isolation_Mode.png";
import imageFour from "../../images/Isolation_Mode(2).png";

const Services = () => {
  return (
    <>
      <NavBar />
      <Stack direction={"column"}>
        <Typography
          padding={2}
          marginTop={15}
          marginLeft={2}
          marginRight={2}
          marginBottom={2}
          bgcolor={" #F2590033"}
          borderRadius={2}
          variant='h6'
        >
          Our Services
        </Typography>
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Stack direction={"column"} spacing={2}>
            <ServiceCard
              title={"Postal Code Lookup"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageOne}
            />
            <ServiceCard
              title={"Postal Cost"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageTwo}
            />
          </Stack>
          <Stack direction={"column"} spacing={2}>
            <ServiceCard
              title={"Received Letter Tracker"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageThree}
            />
            <ServiceCard
              title={"Post Stamp"}
              description={
                "This allows users to find the postal code of any post office in Sri Lanka, simplifying the process of addressing mail accurately and ensuring smooth and efficient mail delivery."
              }
              imageUrl={imageFour}
            />
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default Services;
