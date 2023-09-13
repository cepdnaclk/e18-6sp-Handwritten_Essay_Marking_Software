import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Stack, Typography } from "@mui/material";
import stampCollection from "../../images/world-post-office-day-national-post-day-generative-ai (1) 1.png";

const About = () => {
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
          Who We Are
        </Typography>
        <Stack
          direction='row-reverse'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Typography width={"50%"}>
            Experience efficient and reliable mail services tailored to your
            needs at our trusted post service . 
            
            Experience efficient and
            reliable mail services tailored to your needs at our trusted post
            service .Experience efficient and reliable mail services tailored.
          </Typography>
          <img width={400} src={stampCollection} alt='' />
        </Stack>
      </Stack>
      <Footer />
    </>
  );
};

export default About;
